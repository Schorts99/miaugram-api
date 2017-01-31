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
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: '17012017',
      name: 'Dulbran',
      username: 'Pepito',
      email: 'dul&bran4ever@miaugram.test',
      password: 'dulceBebe',
      createdAt: new Date().toString()
    }
  }
}
