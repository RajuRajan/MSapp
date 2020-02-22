export const serviceList = [
  // {
  //   title: "Salon & Massage at Home",
  //   sub_title: "Services from Women",
  //   category_link: "smh",
  //   img:
  //     "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_6904b8d0.jpeg"
  // },
  {
    title: "Plumber, Electrician, Carpenter",
    category_link: "pec",
    sub_title: "Service in 60 minutes",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_c2e46e50.jpeg"
  },
  {
    title: "Cleaning & Pest Control",
    sub_title: "Bathroom| Sofa| Kitchen",
    category_link: "cpc",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_e8868d30.jpeg"
  },
  {
    title: "Appliances & Electronic Repair",
    category_link: "aer",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_82082360.jpeg"
  },
  {
    title: "House Painters",
    category_link: "hp",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_830ebff0.jpeg"
  },
  {
    title: "Fitness and Trainers",
    category_link: "ft",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_873de490.jpeg"
  },
  {
    title: "Party Decorators",
    category_link: "pd",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/w_700,f_auto,q_80/categories/category_v2/category_83a335c0.jpeg"
  }
];

export const categories = [
  {
    title: "Salon at Home for Women",
    category_link: "smh",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_46d4d810.png"
  },
  {
    title: "Salon at Home for Men",
    category_link: "smh",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_45968bb0.png"
  },
  {
    title: "Cleaning",
    category_link: "cpc",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_440defe0.png"
  },
  {
    title: "Electrician, Plumber, Carpenter",
    category_link: "pec",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_44c44790.png"
  },
  {
    title: "Appliances & Electronics Repair",
    category_link: "aer",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_43d309c0.png"
  },
  {
    title: "Massage at Home",
    category_link: "smh",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_473a2990.png"
  },
  {
    title: "Fitness & Yoga",
    category_link: "ft",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_478144b0.png"
  },
  {
    title: "Painting",
    category_link: "hp",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_462d9b90.png"
  },
  {
    title: "Pest Control",
    category_link: "cpc",
    img:
      "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category,q_30/categories/category_v2/category_46565940.png"
  }
];

export function getCategoryDetails(cat) {
  switch (cat) {
    case "smh":
      return {
        title: "Salon & Massage at Home",
        services: [
          {
            service_name: "Men's Haircut & Grooming",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_1e82f580.jpeg"
          },
          {
            service_name: "Salon at Home for Women",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_1af4c100.png"
          },
          {
            service_name: "Massage for Men",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_1e2fa560.jpeg"
          },
          {
            service_name: "Massage for Women",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_b6e82c30.jpeg"
          },
          {
            service_name: "Makeup and Hairstyling",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_9b68f7b0.jpeg"
          },
          {
            service_name: "Fitness Trainer at Home",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_9f368930.jpeg"
          },
          {
            service_name: "Yoga Trainer at Home",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_9ea063b0.png"
          }
        ]
      };

    case "pec":
      return {
        title: "Plumber, Electrician, Carpenter",
        services: [
          {
            service_name: "Electricians",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/electrician.jpg"
          },
          {
            service_name: "Plumbers",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/plumber.jpg"
          },
          {
            service_name: "Carpenters",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/carpenter.jpg"
          },
          {
            service_name: "Woodwork and Furniture Making",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_905d3300.jpeg"
          }
        ]
      };

    case "cpc":
      return {
        title: "Cleaning & Pest Control",
        services: [
          {
            service_name: "Bathroom Deep Cleaning",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_165bfd50.png"
          },
          {
            service_name: "Kitchen Deep Cleaning",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_6c4f2b00.png"
          },
          {
            service_name: "Sofa Cleaning",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_2effaaf0.png"
          },
          {
            service_name: "Pest Control",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_16bbf7a0.png"
          },
          {
            service_name: "Full Home Deep Cleaning",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_94cce1f0.png"
          },
          {
            service_name: "Car Cleaning",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/categories/car-cleaning.jpg"
          },
          {
            service_name: "Carpet Cleaning",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_931b17b0.png"
          }
        ]
      };

    case "aer":
      return {
        title: "Appliances & Electronics Repair",
        services: [
          {
            service_name: "Geyser Service and Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_c0667020.png"
          },
          {
            service_name: "Microwave Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_c008bfc0.png"
          },
          {
            service_name: "Washing Machine Service & Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_b78221c0.png"
          },
          {
            service_name: "Refrigerator Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_bf5acc80.png"
          },
          {
            service_name: "AC Service and Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_c0cab030.png"
          },
          {
            service_name: "RO or Water Purifier Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_bbb8c690.png"
          },
          {
            service_name: "Chimney Cleaning & Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_c1082e60.png"
          },
          {
            service_name: "Television Repair & Installation",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_b8652ec0.png"
          },
          {
            service_name: "Room Heater & Air Cooler Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_266c1950.jpeg"
          },
          {
            service_name: "Mixer & Grinder Repair",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_cf3f42d0.png"
          }
        ]
      };
    case "hp":
      return {
        title: "House Painters",
        services: [
          {
            service_name: "House Painters",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/bigpictures/house_painters.jpg"
          }
        ]
      };
    case "pd":
      return {
        title: "Party Decorators",
        services: [
          {
            service_name: "Party Decoration",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/home_screen/birthday_planner.jpg"
          }
        ]
      };
    case "ft":
      return {
        title: "Fitness and Trainers",
        services: [
          {
            service_name: "Fitness Trainer at Home",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_9f368930.jpeg"
          },
          {
            service_name: "Yoga Trainer at Home",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/category_v2/category_9ea063b0.png"
          },
          {
            service_name: "Dietician",
            service_img:
              "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category,q_30/categories/bigpictures/diet.jpg"
          }
        ]
      };
    default:
      return {};
  }
}

export const myBooking =[{
  booking_id:"#123456",
  booking_type:"Refirigirator",
  booking_category:"pec",
  booking_status:"Rejected",
  appointment_time:"1:00pm",
  booking_time:"4:00pm",
  captain_charge:"$35",
  isappointment_fixed:false,
  isrejected:true,
  captain_name:"John",
  captain_number:"123456789"
},
{
  booking_id:"#67890",
  booking_type:"Stablizer",
  booking_category:"pec",
  booking_status:"pending",
  appointment_time:"2:00pm",
  booking_time:"4:00pm",
  captain_charge:"$35",
  isappointment_fixed:true,
  captain_name:"Alan",
  captain_number:"123456789"
},
{
  booking_id:"#67890",
  booking_type:"Stablizer",
  booking_category:"pec",
  booking_status:"Pending",
  appointment_time:"2:00pm",
  booking_time:"4:00pm",
  captain_charge:"$35",
  isappointment_fixed:false,
  isrejected:false,
  captain_name:"Walker",
  captain_number:"123456789"
}
]
