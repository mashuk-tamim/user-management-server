/**
 * 1. create a post api on server side
 * 2. client side send data via post
 * 3. set fetch method inside the fetch option (second parameter)
 * 4. option will have three things:
 *       i.  method: 'POST'
 *      ii.  headers: {
 *           'Content-Types': 'application/json'
 *           }
 *     iii.  body: JSON.stringify(data)
 * 5. On the server side: don't forget to use express.json() middleware
 * 
 */