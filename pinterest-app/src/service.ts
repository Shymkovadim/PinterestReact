const mockPin = [
    {
        id: 11,
        src: '/images/b1.jpg',
        title: 'Car',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 12,
        src: '/images/b2.jpg',
        title: 'Car',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 13,
        src: '/images/b3.jpg',
        title: 'Car',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 14,
        src: '/images/h1.jpg',
        title: 'Home',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 15,
        src: '/images/h2.jpg',
        title: 'Home',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 16,
        src: '/images/h3.jpg',
        title: 'Home',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 17,
        src: '/images/a1.jpg',
        title: 'design',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 18,
        src: '/images/a2.jpg',
        title: 'design',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    },
    {
        id: 19,
        src: '/images/a3.jpg',
        title: 'design',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

    }
]

export const service = {
    getPin() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockPin)
            }, 1300)
        })
    }
}