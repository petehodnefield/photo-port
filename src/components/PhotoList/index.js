import React, {useState} from 'react'
import Modal from '../Modal'


const PhotoList = ({category}) => {
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: "lorem"
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: "lorem"
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: "lorem"
        },
        {
            name: 'Restaurant tale',
            category: 'commercial',
            description: "lorem"
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: "lorem"
        },
        {
            name: 'Cat green eyes',
            category: 'portaits',
            description: "lorem"
        },
        {
            name: 'Green parrot',
            category: 'portaits',
            description: "lorem"
        },
        {
            name: 'Yellow macaw',
            category: 'portaits',
            description: "lorem"
        },
        {
            name: 'Pug smile',
            category: 'portaits',
            description: "lorem"
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: "lorem"
        },
        {
            name: 'Burrito',
            category: 'food',
            description: "lorem"
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: "lorem"
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
        
    ])
    const [isModalOpen, setIsModalOpen] = useState(false);


    const currentPhotos = photos.filter((photo) => photo.category === category)

    const [currentPhoto, setCurrentPhoto] = useState()

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen)
    }

    return (
        <div>
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
            <div className='flex-row'>
                {currentPhotos.map((image, i)=> (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList