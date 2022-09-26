const cards = [
    {
      id: 1,
      imgUrl: 'images/1.png',
      title: 'Устрицы по-рокфеллеровски',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Ullam, quibusdam libero excepturi officia veritatis, quaerat nihil sit iste praesentium laboriosam aliquam culpa tempore quo molestiae similique velit mollitia necessitatibus autem minima suscipit adipisci repellendus doloribus. Enim consectetur libero, quae porro dignissimos tenetur laudantium nam sint neque iure ea ab? Consequuntur, nesciunt laborum quis aliquam non veritatis officiis possimus quos animi provident eos sapiente nemo, quod veniam ullam velit dolore iste minima deleniti, blanditiis. Fugiat numquam porro, accusantium voluptates dolor culpa mollitia quas optio repudiandae tenetur?',
      price: 2700,
      portion: '500 г.'
    },
    {
      id: 2,
      imgUrl: 'images/2.png',
      title: 'Свиные ребрышки на гриле с зеленью',
      description: 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.',
      price: 1600,
      portion: '750 г.'
    },
    {
      id: 3,
      imgUrl: 'images/3.png',
      title: 'Креветки по-королевски в лимонном соке',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Ullam, quibusdam libero excepturi officia veritatis, quaerat nihil sit iste praesentium laboriosam aliquam culpa tempore quo molestiae similique velit mollitia necessitatibus autem minima suscipit adipisci repellendus doloribus. Enim consectetur libero, quae porro dignissimos tenetur laudantium nam sint neque iure ea ab? Consequuntur, nesciunt laborum quis aliquam non veritatis officiis possimus quos animi provident eos sapiente nemo, quod veniam ullam velit dolore iste minima deleniti, blanditiis. Fugiat numquam porro, accusantium voluptates dolor culpa mollitia quas optio repudiandae tenetur?',
      price: 1820,
      portion: '7 шт.'
    },
    {
      id: 4,
      imgUrl: 'images/1.png',
      title: 'Устрицы по-рокфеллеровски',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Ullam, quibusdam libero excepturi officia veritatis, quaerat nihil sit iste praesentium laboriosam aliquam culpa tempore quo molestiae similique velit mollitia necessitatibus autem minima suscipit adipisci repellendus doloribus. Enim consectetur libero, quae porro dignissimos tenetur laudantium nam sint neque iure ea ab? Consequuntur, nesciunt laborum quis aliquam non veritatis officiis possimus quos animi provident eos sapiente nemo, quod veniam ullam velit dolore iste minima deleniti, blanditiis. Fugiat numquam porro, accusantium voluptates dolor culpa mollitia quas optio repudiandae tenetur?',
      price: 2700,
      portion: '500 г'
    },
    {
      id: 5,
      imgUrl: 'images/1.png',
      title: 'Устрицы по-рокфеллеровски',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Ullam, quibusdam libero excepturi officia veritatis, quaerat nihil sit iste praesentium laboriosam aliquam culpa tempore quo molestiae similique velit mollitia necessitatibus autem minima suscipit adipisci repellendus doloribus. Enim consectetur libero, quae porro dignissimos tenetur laudantium nam sint neque iure ea ab? Consequuntur, nesciunt laborum quis aliquam non veritatis officiis possimus quos animi provident eos sapiente nemo, quod veniam ullam velit dolore iste minima deleniti, blanditiis. Fugiat numquam porro, accusantium voluptates dolor culpa mollitia quas optio repudiandae tenetur?',
      price: 2700,
      portion: '500 г.'
    },
    {
      id: 6,
      imgUrl: 'images/2.png',
      title: 'Свиные ребрышки на гриле с зеленью',
      description: 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.',
      price: 1600,
      portion: '750 г.'
    },
    {
      id: 7,
      imgUrl: 'images/3.png',
      title: 'Креветки по-королевски в лимонном соке',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Ullam, quibusdam libero excepturi officia veritatis, quaerat nihil sit iste praesentium laboriosam aliquam culpa tempore quo molestiae similique velit mollitia necessitatibus autem minima suscipit adipisci repellendus doloribus. Enim consectetur libero, quae porro dignissimos tenetur laudantium nam sint neque iure ea ab? Consequuntur, nesciunt laborum quis aliquam non veritatis officiis possimus quos animi provident eos sapiente nemo, quod veniam ullam velit dolore iste minima deleniti, blanditiis. Fugiat numquam porro, accusantium voluptates dolor culpa mollitia quas optio repudiandae tenetur?',
      price: 1820,
      portion: '7 шт.'
    },
    {
      id: 8,
        imgUrl: 'images/1.png',
      title: 'Устрицы по-рокфеллеровски',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Ullam, quibusdam libero excepturi officia veritatis, quaerat nihil sit iste praesentium laboriosam aliquam culpa tempore quo molestiae similique velit mollitia necessitatibus autem minima suscipit adipisci repellendus doloribus. Enim consectetur libero, quae porro dignissimos tenetur laudantium nam sint neque iure ea ab? Consequuntur, nesciunt laborum quis aliquam non veritatis officiis possimus quos animi provident eos sapiente nemo, quod veniam ullam velit dolore iste minima deleniti, blanditiis. Fugiat numquam porro, accusantium voluptates dolor culpa mollitia quas optio repudiandae tenetur?',
      price: 2700,
      portion: '500 г.'
    },
]

export const getCardFromBackend = (id) => cards.find(card => card.id == id)

export const getAllCardsFromBackend = () => cards
