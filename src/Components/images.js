import React from 'react';

const ImageGallery = () => {
    const largeImageUrl = "path_to_large_image.jpg";
    const smallImages = [
        "path_to_small_image_1.jpg",
        "path_to_small_image_2.jpg",
        "path_to_small_image_3.jpg",
        "path_to_small_image_4.jpg",
        "path_to_small_image_5.jpg",
        "path_to_small_image_6.jpg",
    ];

    return (
        <div style={styles.container}>
            <div style={styles.largeImageWrapper}>
                <img src={largeImageUrl} alt="Large Display" style={styles.largeImage} />
            </div>
            <div style={styles.smallImagesWrapper}>
                {smallImages.map((image, index) => (
                    <img key={index} src={image} alt={`Small Display ${index + 1}`} style={styles.smallImage} />
                ))}
            </div>
        </div>
    );
};
export default ImageGallery;
