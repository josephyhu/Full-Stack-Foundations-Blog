const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

new Vue({
  el: '#post',
  data: {
    title: '',
    timestamp: '',
    content: ''
  },
  mounted() {
    fetch(`http://localhost:8000/api/v1/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        this.title = data.title
        this.timestamp = data.timestamp
        this.content = data.content
      })
    }
});
