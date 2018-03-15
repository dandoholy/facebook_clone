import React from 'react';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  updateFile (e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: null, imageFile: null });
    }
  }

  uploadPhoto () {
    const { submit, picCategory } = this.props;
    return (e) => {
      const file = this.state.imageFile;
      const formData = new FormData();
      if (file) formData.append(`profile[${picCategory}]`, file);
      this.props.submit(formData);
      this.setState({ imageUrl: null, imageFile: null });
    }
  }


}

export default PhotoUpload;
