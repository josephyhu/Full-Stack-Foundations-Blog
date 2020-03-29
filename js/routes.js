function updatePost(id, title, content) {
  const path = `http://localhost:8000/api/v1/posts/${id}`;
  axios.put(path, {title: title, content: content})
    .then(response => response.data)
    .then(() => window.location.replace(`post.html?id=${id}`))
  alert('Post updated');
}

function update(title, content) {
  updatePost(id, title, content);
}

function deletePost(id) {
  const path = `http://localhost:8000/api/v1/posts/${id}`;
  confirm('Confirm delete');
  axios.delete(path)
    .then(response => response.data)
    .then(() => window.location.replace('index.html'))
  alert('Post deleted');
}

function del() {
  deletePost(id);
}
