function createPost(title, content) {
  const path = 'http://localhost:8000/api/v1/posts';
  axios.post(path, {title: title, content: content})
    .then(response => response.data)
    .then(() => window.location.replace('index.html'))
    .then(() => alert('Post created'))
}

function create() {
  title = document.querySelector('#title').value;
  content = document.querySelector('#content').value;
  createPost(title, content);
}

function updatePost(id, title, content) {
  const path = `http://localhost:8000/api/v1/posts/${id}`;
  axios.put(path, {title: title, content: content})
    .then(response => response.data)
    .then(() => window.location.replace(`post.html?id=${id}`))
    .then(() => alert('Post updated'))
}

function update() {
  title = document.querySelector('#title').value;
  content = document.querySelector('#content').value;
  updatePost(id, title, content);
}

function deletePost(id) {
  const path = `http://localhost:8000/api/v1/posts/${id}`;
  confirm('Confirm delete');
  axios.delete(path)
    .then(response => response.data)
    .then(() => window.location.replace('index.html'))
    .then(() => alert('Post deleted'))
}

function del() {
  deletePost(id);
}
