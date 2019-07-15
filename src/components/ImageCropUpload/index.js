import React from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import './style.css'

class ImageCropUpload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            src: null,
            srcType: null,
            crop: {
                unit: "%",
                width: 30,
                aspect: 16 / 9
            },
            croppedImageUrl: null,
            croppedImageFile: null
        }
    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener("load", () =>
                this.setState({ src: reader.result })
            )
            reader.readAsDataURL(e.target.files[0])
        }
    };

    onImageLoaded = image => {
        this.imageRef = image
    }

    onCropComplete = crop => {
        this.makeClientCrop(crop)
    }
    
    onCropChange = (crop, percentCrop) => {
        this.setState({ crop })
    }
    
    async makeClientCrop(crop) {
        function blob2file(theBlob, filename, contentType){
            return new File([theBlob], filename, {type: contentType, lastModified: Date.now()});
        }
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                "newFile.jpeg"
            )
            const blobToFile = blob2file(croppedImageUrl, 'New Image.jpeg', 'image/jpeg')
            console.log(blobToFile)
            this.setState({ croppedImageUrl, croppedImageFile: blobToFile })
        }
    }
    
    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas")
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext("2d")

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )
    
        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
            if (!blob) {
                //reject(new Error('Canvas is empty'))
                console.error("Canvas is empty")
                return
            }
            blob.name = fileName
            window.URL.revokeObjectURL(this.fileUrl)
            this.fileUrl = window.URL.createObjectURL(blob)
            resolve(this.fileUrl)
            }, "image/jpeg")
        })
    }
    
    render() {
        const { crop, croppedImageUrl, src } = this.state
    
        return (
            <div>
                <div>
                    <input type="file" onChange={this.onSelectFile} />
                </div>
                { src &&
                    <div className="imgCropContainer" style={{ width: '500px' }}>
                        <ReactCrop src={src}
                               crop={crop}
                               onImageLoaded={this.onImageLoaded}
                               onComplete={this.onCropComplete}
                               onChange={this.onCropChange}
                            />
                    </div>
                }
                { croppedImageUrl &&
                    <img alt="Crop" style={{ maxWidth: "100%" }} src={croppedImageUrl} />
                }
            </div>
        )
    }
}

export default ImageCropUpload