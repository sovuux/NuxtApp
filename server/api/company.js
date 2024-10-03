//Использовал Nuxt Routes, здесь хранится о компании "Company"

export default defineEventHandler(() => {
  return {
    headers: {
      logo: "/logo.png",
      title: "Наследие",
      rating: {
        documents: true,
        stars: 4.7,
        reviews: "19 отзывов",
      },
      agentsCount: 6,
      productsCount: 8,
    },
    products: [
      {
        id: 1,
        logo: "/cardImages/products/product1.png",
        name: "Сlavia Nord Grand сценическое цифровое пианино",
        price: "450 500 ₽",
        views: 750,
        daysSincePosted: "2 дня",
        status: "Объявление продвигается",
      },
      {
        id: 2,
        logo: "/cardImages/products/product2.png",
        name: "Hyundai Sonata 2.0 AT, 2023, 30 км",
        price: "3 285 000 ₽",
        views: 255,
        daysSincePosted: "4 дня",
        status: "Увеличьте количество просмотров",
      },
      {
        id: 3,
        logo: "/cardImages/products/product3.png",
        name: "2-к. квартира, 46 м², 1/5 эт.",
        price: "4 800 000 ₽",
        views: 255,
        daysSincePosted: "2 дня",
        status: "Увеличьте количество просмотров",
      },
      {
        id: 4,
        logo: "/cardImages/products/product4.png",
        name: "Старые барабаны",
        price: "7 500 ₽",
        views: 255,
        daysSincePosted: "2 дня",
        status: "Увеличьте количество просмотров",
      },
      {
        id: 5,
        logo: "/cardImages/products/product5.png",
        name: "DMX сплиттер RJ45 to 4x XLR Stairville",
        price: "7 500 ₽",
        views: 255,
        daysSincePosted: "2 дня",
        status: "Увеличьте количество просмотров",
      },
      {
        id: 6,
        logo: "/cardImages/products/product6.png",
        name: "Мотоцикл honda",
        price: "217 500 ₽",
        views: 255,
        daysSincePosted: "2 дня",
        status: "Увеличьте количество просмотров",
      },
      {
        id: 7,
        logo: "/cardImages/products/product7.png",
        name: "Иж юпитер 5",
        price: "17 900 ₽",
        views: 255,
        daysSincePosted: "2 дня",
        status: "Увеличьте количество просмотров",
      },
      {
        id: 8,
        logo: "/cardImages/products/product8.png",
        name: "Пылесос кёрхер с водяным мешком для сбора пыли",
        price: "7 500 ₽",
        views: null,
        daysSincePosted: null,
        status: "Объявление скрыто",
      },
    ],
    agents: [
      {
        id: 1,
        name: "Дмитрий Хитрый",
        logo: "/cardImages/agents/agent1.png",
        rating: {
          documents: true,
          stars: 4.3,
          reviews: "19 отзывов",
        },
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      },
      {
        id: 2,
        name: "Апполинарий Землеперекопский",
        logo: "/cardImages/agents/agent2.png",
        rating: {
          documents: true,
          stars: null,
          reviews: "Нет отзывов",
        },
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей.",
      },
      {
        id: 3,
        name: "Фёдор Сумкин",
        logo: "/cardImages/agents/agent3.png",
        rating: {
          documents: false,
          stars: 4.3,
          reviews: "19 отзывов",
        },
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      },
      {
        id: 4,
        name: "Василий Копушин",
        logo: "/cardImages/agents/agent4.png",
        rating: {
          documents: true,
          stars: 4.3,
          reviews: "19 отзывов",
        },
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      },
      {
        id: 5,
        name: "Феофан Кусакин",
        logo: "/cardImages/agents/agent5.png",
        rating: {
          documents: false,
          stars: 4.7,
          reviews: "19 отзывов",
        },
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      },
      {
        id: 6,
        name: "Василиса Землеперекопская",
        logo: "/cardImages/agents/agent6.png",
        rating: {
          documents: true,
          stars: 4.7,
          reviews: "19 отзывов",
        },
        description:
          "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
      },
    ],
    about: {
      description:
        "Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.",
      workingHours: "Сегодня с 8:00 до 23:00",
      address: "",
      coordinates: {
        lat: 3222,
        lng: 31213,
      },
    },
  };
});
