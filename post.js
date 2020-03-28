new Vue({
  el: '#post',
  data: {
    title: '',
    timestamp: '',
    content: ''
  },
  mounted() {
    fetch('http://localhost:8000/api/v1/posts')
      .then(response => response.json())
      .then(data => {
        posts = data.posts
        for (let i = 0; i < posts.length; i += 1) {
          fetch(`http://localhost:8000/api/v1/posts/${posts[i].id}`)
            .then(response => response.json())
            .then(data => this.title = data.title)
            .then(data => this.timestamp = data.timestamp)
        }
      })
  }
});
