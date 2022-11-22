const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  crop(event) {
    console.log(event.detail.x);
    console.log(event.detail.y);
    console.log(event.detail.width);
    console.log(event.detail.height);
    console.log(event.detail.rotate);
    console.log(event.detail.scaleX);
    console.log(event.detail.scaleY);

    // aqui é para controlar em php em vez do = deve ser *
    var data = cropper.getCroppedCanvas({
      maxWidth: 250,
      maxheight: 250
    }).toDataURL(image / png);

    // aqui é para setar o valor/ quando dou show, é para exlcuir style: none 
    $('.j_cropper_preview').attr('src', data).show();

    console.log(data);
  },
});

