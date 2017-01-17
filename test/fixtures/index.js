export default {
  getImage () {
    return {
      id: '16012017',
      publicId: '160117',
      userId: 'Miaugram',
      liked: false,
      likes: 0,
      src: 'http://miaugram.test/160117.jpg',
      description: '#miau',
      tags: [ 'miau' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  }
}
