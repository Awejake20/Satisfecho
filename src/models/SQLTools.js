class SQLTools {
  
  constructor(path) {
    /**
     * @param {String} path - Path to SQL .db file
     */

    this.path = path;
    if (!(this.path instanceof String)) {
      throw new Error("SQLTools argument must be a string.");
    }
  }

  fetch(query) {
    /**
     * @param {String} query - SQL search query
     * @return {Array} Database entry in array format
     */

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.path, true);
      xhr.responseType = 'arraybuffer';

      xhr.onload = function(e) {
        try {
          const db = new SQL.Database(new Uint8Array(xhr.response));

          // Execute the provided query and get the first result directly
          const [result] = db.exec(query)[0]?.values || [];

          // Resolve the promise with the result or reject if no results
          if (result) resolve(result);
          else reject(new Error('No results found.'));
        } 
        catch (error) {
          reject(error);
        }
      };

      xhr.onerror = function(e) {
        reject(new Error('Error loading the database.'));
      };

      xhr.send();
    });
  }
}

export default SQLTools