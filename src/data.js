import React, { Component } from "react";

import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";
import img13 from "./images/room-13.jpeg";
import img14 from "./images/room-14.jpeg";
import img15 from "./images/room-15.jpeg";
import BG_LaMora from "./images/BG_lamora.png";
import BG_Logo_LaMora from "./images/BG_logo_lamora.jpeg";
import delivery1 from "./images/details-delivery-1.jpeg";
import delivery2 from "./images/details-delivery-2.jpeg";
import delivery3 from "./images/details-delivery-3.jpeg";
import BG_ViejoMadero from "./images/BG_viejomadero.png";
import BG_Logo_ViejoMadero from "./images/BG_logo_viejomadero.jpeg";
import furniture1 from "./images/details-furniture-1.jpeg";
import furniture2 from "./images/details-furniture-2.jpeg";
import furniture3 from "./images/details-furniture-3.jpeg";
import BG_ChifaCentro from "./images/BG_chifacentro.png";
import BG_Logo_ChifaCentro from "./images/BG_logo_chifacentro.jpeg";
import cam1 from "./images/details-cam-1.jpeg";
import cam2 from "./images/details-cam-2.jpeg";
import cam3 from "./images/details-cam-3.jpeg";

import BG_Carnivoro from "./images/BG_carnivoro.png";
import BG_Logo_Carnivoro from "./images/BG_logo_carnivoro.jpeg";

// Business Logo
import Viejo_Madero from "./images/logo.png";
import Chifa_Centro from "./images/logo_chifa_centro.png";
import La_Mora from "./images/logo_la_mora.png";
import Carnivoro from "./images/logo_carnivoro.png";

// La Mora
import LM01 from "./images/lamora/almuerzo01.jpeg";
import LM02 from "./images/lamora/almuerzo02.jpeg";
import LM03 from "./images/lamora/almuerzo03.jpeg";
import LM04 from "./images/lamora/almuerzo04.jpeg";

// Mamá Meche
import Mama_Meche from "./images/logo_mama_meche.png";
import BG_Logo_MamaMeche from "./images/BG_logo_mamameche.jpeg";
import BG_MamaMeche from "./images/BG_mamameche.png";
// Mamá Meche - Image Card
import MM1 from "./images/mamameche/1-sanguche-de-pollo.jpeg";
import MM2 from "./images/mamameche/2-sanguche-de-asado.jpeg";
import MM3 from "./images/mamameche/3-sanguche-de-pavo.jpeg";
import MM4 from "./images/mamameche/4-chicarron-mamameche.jpeg";
import MM5 from "./images/mamameche/5-lomo-saltado.jpeg";
import MM6 from "./images/mamameche/6-beef-cheedar.jpeg";

// Chifa Palacio Chino
import Palacio_Chino from "./images/logo_palaciochino.png";
import BG_Logo_PalacioChino from "./images/BG_logo_palaciochino.jpeg";
import BG_PalacioChino from "./images/BG_palaciochino.png";

// Image Card
import Broaster01 from "./images/broaster01.jpeg";
import Broaster02 from "./images/broaster02.jpeg";
import Broaster03 from "./images/broaster03.jpeg";

import Popeyes from "./images/logo_popeyes.png";
import BG_Logo_Popeyes from "./images/BG_logo_popeyes.jpeg";
import BG_Popeyes from "./images/BG_popeyes.png";
// Popeyes - Image Card
import Personal01 from "./images/popeyes/CajunClasico.jpeg";
import Personal02 from "./images/popeyes/CajunFull.jpeg";
import Personal03 from "./images/popeyes/CajunMix.jpeg";
import Personal04 from "./images/popeyes/SuperComboPersonal.jpeg";
import Compartir01 from "./images/popeyes/FestivalDoble.jpeg";
import Compartir02 from "./images/popeyes/ComboPara2.jpeg";
import Compartir03 from "./images/popeyes/DuplaMix.jpeg";
import Familiar01 from "./images/popeyes/CajunFullFamiliar.jpeg";
import Familiar02 from "./images/popeyes/FestiClasico.jpeg";
import Promocion01 from "./images/popeyes/ChickenMix.jpeg";
import Promocion02 from "./images/popeyes/PrimaveraFest.jpeg";
import Promocion03 from "./images/popeyes/FestivalPop.jpeg";
import Promocion04 from "./images/popeyes/FestiSuperFamiliar.jpeg";

// El Embarcadero
import Embarcadero from "./images/logo_embarcadero.png";
import BG_Logo_Embarcadero from "./images/BG_logo_embarcadero.jpeg";
import BG_Embarcadero from "./images/BG_embarcadero.png";
// Embarcadero - Image Card
import Combo01 from "./images/embarcadero/combo1.jpeg";
import Combo02 from "./images/embarcadero/combo2.jpeg";
import Combo03 from "./images/embarcadero/combo3.jpeg";
import Combo04 from "./images/embarcadero/combo4.jpeg";

// Sr Tako
import SrTako from "./images/logo_srtako.png";
import BG_Logo_SrTako from "./images/BG_logo_srtako.jpeg";
import BG_SrTako from "./images/BG_srtako.png";

// El Costillar
import ElCostillar from "./images/logo_costillar.png";
import BG_Logo_ElCostillar from "./images/BG_logo_costillar.jpeg";
import BG_ElCostillar from "./images/BG_elcostillar.png";

import { FaWhatsapp } from "react-icons/fa";

export default [
  
  /*
  * Featured Restaurant (featured: true)
  */

  // Top Content: El Viejo Madero
  {
    sys: {
      id: "14"
    },
    fields: {
      active: true,
      slug: "pollos",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Pollos",
      speciality: "Pollo Broaster",
      logo: Viejo_Madero,
      image_header: BG_ViejoMadero,
      atention: "Lun-Dom de 12:00-19:30 horas",
      price_delivery: '',
      experience: 32,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20del%20Viejo%20Madero."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: "Broasteria El Viejo Madero",
      description: "Desde 1982, tradicionalmente Huancaino, con 32 años de experiencia, somos la primera broasteria con el mejor sabor y calidad. Disfruta con nosotros el mejor sabor Huancaíno.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_ViejoMadero //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],   

      // Card Content
      card: [
        {
          image: Broaster01,
          title: 'Personal',
          info: [
            '1/4 de Pollo Broaster',
            '+ Papas',
            '+ Ensalada',
            '+ Cremas',
          ],
          price: 'S/ 15.50',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster02,
          title: 'Combo Personal',
          info: [
            '1/4 de Pollo Broaster',
            '+ Papas',
            '+ Ensalada y Cremas',
            '+ 450ml Gaseosa (Inca/Coca)',
          ],
          price: 'S/ 17.50',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Combo Familar',
          info: [
            '4/4 de Pollo Broaster',
            '+ Porción de Papas Familiar',
            '+ Ensalada Familiar y Cremas',
            '+ 1.5L Gaseosa (Inca/Coca)'
          ],
          price: 'S/ 68.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: El Viejo Madero

  // Top Content: Chifa Centro
  // {
  //   sys: {
  //     id: "15"
  //   },
  //   fields: {
  //     active: false,
  //     slug: "comida_china",
  //     name: "",
  //     district: "Huancayo, Tambo, Chilca",
  //     type: "Comida China",
  //     speciality: "Comida China",
  //     logo: Chifa_Centro,
  //     image_header: BG_ChifaCentro,
  //     atention: "Lun-Dom de 12:30-19:30 horas",
  //     experience: 27,
  //     home: true,
  //     workshop: false,
  //     contact:
  //       <a
  //         className="btn-primary-slider"
  //         href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20del%20Chifa%20Centro."
  //         target="_blank"
  //         style={{ textAlign: "center", width: "100%" }}
  //       >
  //         <FaWhatsapp
  //           style={{
  //             fontSize: "1.4rem",
  //             verticalAlign: "text-bottom",
  //             marginRight: "5px"
  //           }}
  //         />
  //         Pedir Carta
  //       </a>
  //     ,
  //     featured: true,
  //     titleDescription: "Chifa Centro",
  //     description: "Elaboramos nuestros platos con mucha honestidad, cuidando en todo momento la salud, la calidad y el buen sabor propio de un buen restaurante chino. Tenemos a su disposición diversidad de platos para que pueda disfrutar de un festín cantonés cerca de casa. Lo invitamos a experimentar con nosotros una enorme variedad de sabores y sensaciones.",
  //     titleDescription02: "Servicio Express / Atención Inmediata",
  //     description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
  //     extras: [
  //       "Atención express",
  //       "Tu solución de transporte a un Click",
  //       "Nuestros precios son muy competitivos",
  //       "Te llevamos a domicilio lo que quieras",
  //       "Nos adaptamos a la necesidad de cada cliente"
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: BG_Logo_ChifaCentro //img15
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: cam1
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: cam2
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: cam3
  //           }
  //         }
  //       }
  //     ],

  //     // Card Content
  //     card: [
  //       {
  //         image: BG_Logo_ChifaCentro,
  //         title: 'Combo Personal',
  //         info: [
  //           '1/4 de Pollo Broaster',
  //           '+ Papas',
  //           '+ Ensalada',
  //           '+ 450ml Gaseosa (Inca/Coca)',
  //         ],
  //         price: 'S/ 19.00',
  //         button:
  //           <a
  //             className="btn-primary-slider"
  //             href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
  //             target="_blank"
  //             style={{ textAlign: "center" }}
  //           >
  //             <FaWhatsapp
  //               style={{
  //                 fontSize: "1.4rem",
  //                 verticalAlign: "text-bottom",
  //                 marginRight: "5px"
  //               }}
  //             />
  //             Pedir ahora
  //           </a>
  //       },
  //       {
  //         image: BG_Logo_ChifaCentro,
  //         title: 'Combo Familiar',
  //         info: [
  //           '3/4 de Pollo Broaster',
  //           '+ Porción de Papas Familiar',
  //           '+ Ensalada Familiar',
  //           '+ 1L Gaseosa (Inca/Coca)',
  //         ],
  //         price: 'S/ 49.00',
  //         button:
  //           <a
  //             className="btn-primary-slider"
  //             href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
  //             target="_blank"
  //             style={{ textAlign: "center" }}
  //           >
  //             <FaWhatsapp
  //               style={{
  //                 fontSize: "1.4rem",
  //                 verticalAlign: "text-bottom",
  //                 marginRight: "5px"
  //               }}
  //             />
  //             Pedir ahora
  //           </a>
  //       },
  //       {
  //         image: BG_Logo_ChifaCentro,
  //         title: 'Combo Súper Familar',
  //         info: [
  //           '4/4 de Pollo Broaster',
  //           '+ Porción de Papas Súper Familiar',
  //           '+ Ensalada Familiar',
  //           '+ 1.5L Gaseosa (Inca/Coca)'
  //         ],
  //         price: 'S/ 64.00',
  //         button:
  //           <a
  //             className="btn-primary-slider"
  //             href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
  //             target="_blank"
  //             style={{ textAlign: "center" }}
  //           >
  //             <FaWhatsapp
  //               style={{
  //                 fontSize: "1.4rem",
  //                 verticalAlign: "text-bottom",
  //                 marginRight: "5px"
  //               }}
  //             />
  //             Pedir ahora
  //           </a>
  //       }
  //     ]
  //     // End Card Content
  //   }
  // },
  // End Content: Chifa Centro

  // Top Content: La Mora
  {
    sys: {
      id: "16"
    },
    fields: {
      slug: "comida_criolla",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Criolla",
      speciality: "Comida Criolla",
      logo: La_Mora,
      image_header: BG_LaMora,
      atention: "Lun-Dom de 12:00-16:00 horas",
      price_delivery: 'S/ 5.00',
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20de%20La%20Mora."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: '"La Mora" Restaurant-Cafe',
      description: "Bienvenidos a “La Mora”, Somos un espacio de sencillez y magia: Sencillo en el servicio y Mágico en las comidas y bebidas. Somos su mejor opción para quien desea una experiencia gastronómica única y conoce los sabores del verdadero Perú como en casa, donde siempre contarán con la atención personal, amable y cálida de estos sus servidores.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, esta es la carta y precios de los menús del día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_LaMora //img14
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery1
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery2
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: LM01,
          title: 'Económico',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Sopa Arequipeña',
            '2 - Salpicón de Pollo',
            'Fondo:',
            '- Patita con Maní',
            'Bebida:',
            '- Agua de Frutas',
          ],
          price: 'S/ 8.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Económico.%20Entrada:[...]"
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: LM02,
          title: 'Ejecutivo',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Sopa Arequipeña',
            '2 - Salpicón de Pollo',
            'Fondo:',
            '1 - Pachamanca a la Olla',
            '2 - Pollo a la Olla',
            '3 - Chicharron de Pollo',
            '4 - Pollo con Frutas - Chifa',
            '5 - Asado de Ternera',
            '6 - Pollo al Horno',
            '7 - Tallarines con Asado o Pollo',
            'Bebida:',
            '- Agua de Frutas',
          ],
          price: 'S/ 9.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Ejecutivo%20I.%20Entrada:[...]%20Fondo:[...]"
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: LM03,
          title: 'Especial',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Sopa Arequipeña',
            '2 - Salpicón de Pollo',
            'Fondo:',
            '1 - Pollo al Cilindro',
            '2 - Costilla de Cerdo al Horno',
            'Bebida:',
            '- Agua de Frutas',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Especial%20I.%20Entrada:[...]"
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
      ]
      // End Card Content
    }
  },
  // End Content: La Mora

  // Top Content: Carnivoro
  {
    sys: {
      id: "17"
    },
    fields: {
      slug: "carnivoro",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Rapida",
      speciality: "Comida Rapida",
      logo: Carnivoro,
      image_header: BG_Carnivoro,
      atention: "Lun-Dom de 16:00 - 21:00 horas",
      price_delivery: '',
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20de%20Carnivoro."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: 'Carnivoro',
      description: "Especialistas en Hamburguesas 100% caseras, combinadas con los mejores insumos y sabores que la gastronomía peruana nos brinda.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_Carnivoro //img14
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery1
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery2
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: BG_Logo_Carnivoro,
          title: 'Royal',
          type: 'Hamburguesa', 
          info: [
            'Montado con queso y huevo',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20el%20Royal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'A lo Pobre',
          type: 'Hamburguesa', 
          info: [
            'Montado con platano y huevo',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20hamburguesa%20A%20lo%20Pobre."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Hawaiana',
          type: 'Hamburguesa', 
          info: [
            'Montado con piña golden y queso',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20Hawaiana."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Cheese Burguer',
          type: 'Hamburguesa', 
          info: [
            'Montado con queso holandes',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20el%20Cheese%20Burguer."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Cheese Bacone',
          type: 'Hamburguesa', 
          info: [
            'Montado con queso holandes y tocino',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20el%20Cheese%20Bacone."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'BBQ',
          type: 'Alitas o Wings',
          info: [
            'Bañadas en salsa dulce ahumada',
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20BBQ."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Picantes',
          type: 'Alitas o Wings',
          info: [
            'Bañadas en salsa de miel picante',
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20las%20Picantes."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Clásica',
          type: 'Salchipapa',
          info: [
            'A base de hot-dog de ternera',
            '+ 200GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20salchipapa%20Clásica."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Malcriada',
          type: 'Salchipapa',
          info: [
            'A base de chorizo precodico, finas hierbas y picante',
            '+ 200GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 13.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20salchipapa%20Malcriada."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Clasicos',
          type: 'Alitas/Hamburguesas/Salchipapas',
          info: [
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
            '1 - Alitas (Sazonadas y fritas)',
            '2 - Hamburguesas (Hamburguesa de Res de 130GR)',
            '3 - Salchipapas(A base de hot-dog de ternera)',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20Clasico:%20Hola,%20Quiero%20pedir%20el%20combo%20número:."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_Carnivoro,
          title: 'Alitas Especiales',
          type: '',
          info: [
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
            '1 - BBQ (Bañada en salsa dulce ahumada)',
            '2 - Orientales (Bañadas en salsa agridulce teriyaki)',
            '3 - Picantes (Bañadas en salsa de miel picante)',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20de%20Alitas%20Especiales:%20Hola,%20Quiero%20pedir%20el%20combo%20número:."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: Carnivoro

  // Top Content: Mamá Meche
  {
    sys: {
      id: "18"
    },
    fields: {
      slug: "sanguche",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Rapida",
      speciality: "Comida Rapida",
      logo: Mama_Meche,
      image_header: BG_MamaMeche,
      atention: "Lun-Dom de 16:00-22:00 horas",
      price_delivery: '',
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20de%20Mamá%20Meche."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: 'Sanguchería "Mamá Meche"',
      description: "La sanguchería criolla de Huancayo. Disfruta los mejores desayunos espectaculares al estilo Mamá Meche!",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_MamaMeche //img14
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery1
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery2
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: MM1,
          title: 'Pollo Deshilachado',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 10.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Pollo%20Deshilachado."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: MM2,
          title: 'Sanguche con Asado',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 12.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Sanguche%20con%20Asado."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px",
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: MM3,
          title: 'Sanguche de Pavo',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 13.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Sanguche%20de%20Pavo."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: MM4,
          title: 'Chicharrón Mamá Meche',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 13.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Chicharrón%20Mamá%20Meche."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: MM5,
          title: 'Ciabatta con Lomo Saltado',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 15.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Ciabatta%20con%20Lomo%20Saltado."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: MM6,
          title: 'Beef Cheedar',
          type: 'Sanguche',
          info: [
            'Lomo Fino Beef Cheedar con papas',
          ],
          price: 'S/ 15.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Beef%20Cheedar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: La Mora

  // Top Content: Palacio Chino
  {
    sys: {
      id: "19"
    },
    fields: {
      active: true,
      slug: "palacio_chino",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Chifa",
      speciality: "Peruano-Oriental",
      logo: Palacio_Chino,
      image_header: BG_PalacioChino,
      atention: "Lun-Dom de 12:00-21:30 horas",
      price_delivery: '',
      experience: 32,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20del%20Palacio%20Chino."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: "Restaurante Palacio Chino IV",
      description: "La comida china,rica y colorida tiene como caracteristica principal su color diverso, olor aromatico y sabor excelente.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_PalacioChino //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: BG_Logo_PalacioChino,
          title: 'Económico',
          type: 'MENÚ CHIFA',
          info: [
            'Sopas:',
            '1 - Sopa de pollo',
            '2 - Sopa wantan',
            '3 - Caldo de patita',
            '4 - Sustancia de res',
            '5 - Sopa womin',
            'Segundos:',
            '1 - Arroz Chaufa',
            '2 - Tallarin',
            '3 - Chicharron de pollo(Arroz Chaufa)',
            '4 - Taypac Especial(Arroz Chaufa)',
            '5 - Pollo con Piña(Arroz Chaufa)',
            '6 - Pollo en Salsa Curry(Arroz Chaufa)',
            '7 - Chancho con Tamarindo(Arroz Chaufa)',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Palacio%20Chino:%20Hola,%20quiero%20el%20combo%20Económico.%20Sopa:[...]%20Segundo:[...]"
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_PalacioChino,
          title: 'Ejecutivo',
          type: 'MENÚ CHIFA',
          info: [
            'Sopas:',
            '1 - Sopa de pollo',
            '2 - Sopa wantan',
            '3 - Caldo de patita',
            '4 - Sustancia de res',
            '5 - Sopa womin',
            'Segundos:',
            '1 - Pollo con verduras(Arroz Chaufa)',
            '2 - Pollo con Tamarindo(Arroz Chaufa)',
            '3 - Mixto(Chaufa con Tallarin)',
            '4 - Pollo 5 sabores(Arroz Chaufa)',
            '5 - Enrollado de Pollo(Arroz Chaufa)',
            '6 - Kamlu Wantan(Arroz Chaufa)',
            '7 - Chancho Kintón(Arroz Chaufa)',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Palacio%20Chino:%20Hola,%20quiero%20el%20combo%20Ejecutivo.%20Sopa:[...]%20Segundo:[...]"
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: BG_Logo_PalacioChino,
          title: 'Especial',
          type: 'MENÚ CHIFA',
          info: [
            'Sopas:',
            '1 - Sopa de pollo',
            '2 - Sopa wantan',
            '3 - Caldo de patita',
            '4 - Sustancia de res',
            '5 - Sopa womin',
            'Segundos:',
            '1 - Chicharrón de Trucha(Arroz Chaufa)',
            '2 - Chijaukay(Arroz Chaufa)',
            '3 - Aeropuerto',
            '4 - Enrollado con Frutas(Arroz Chaufa)(Dulce)',
            '5 - Piernita en salsa de Ostión(Arroz Chaufa)',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Palacio%20Chino:%20Hola,%20quiero%20el%20combo%20Especial.%20Sopa:[...]%20Segundo:[...]"
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: Palacio Chino

  // Top Content: Popeyes
  {
    sys: {
      id: "20"
    },
    fields: {
      active: true,
      slug: "popeyes",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Pollo Cajun",
      speciality: "Popeyes Louisiana Kitchen",
      logo: Popeyes,
      image_header: BG_Popeyes,
      atention: "Lun-Dom de 11:00-21:30 horas",
      price_delivery: '',
      experience: 32,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Popeyes:%20Hola,%20quiero%20solicitar%20la%20carta%20completa."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: "Pollo Cajún Popeyes",
      description:
        "¡Popeyes Perú y aquí encontrarás todo sobre nuestro sabor único. Pruébalo en Picantito o Tradicional! ",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, por favor, envíanos un mensaje directo haciendo clic en el botón: CONTACTAR (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_Popeyes //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: Personal01,
          title: 'CAJUN CLASICO',
          info: [
            'Combo Personal',
            '+ 2 Piezas de Pollo',
            '+ 1 Papá Cajún Regular',
            '+ 1 Gaseosa Regular (Inca/Coca)',
          ],
          price: 'S/ 14.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20Cajun%20Personal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Personal02,
          title: 'CAJUN FULL',
          info: [
            'Combo Personal',
            '+ 3 Piezas de Pollo',
            '+ 1 Papa Cajun Regular',
            '+ 1 Gaseosa Regular (Inca/Coca)',
          ],
          price: 'S/ 17.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20Cajun%20Full."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Personal03,
          title: 'CAJÚN MIX',
          info: [
            'Combo Personal',
            '+ 2 Piezas de Pollo',
            '+ 4 Alitas o Nuggets ',
            '+ 1 Papa Cajún Regular',
            '+ 1 Gaseosa Regular (Inca/Coca)',
          ],
          price: 'S/ 21.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20Cajún%20Mix."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Personal04,
          title: 'SUPER COMBO PERSONAL',
          info: [
            'Combo Personal',
            '+ 3 Piezas de Pollo',
            '+ 4 Nuggets o Alitas',
            '+ 1 Papa Cajún Regular',
            '+ 1 Gaseosa Junior (Inca/Coca)',
          ],
          price: 'S/ 25.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20Super%20Combo%20Especial."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Compartir01,
          title: 'FESTIVAL DOBLE NUEVO',
          info: [
            'Combo para Compartir',
            '+ 5 Piezas de Pollo',
            '+ 4 Nuggets',
            '+ 2 Papas Cajún Grande',
          ],
          price: 'S/ 29.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20popeyes:%20Hola.%20Quiero%20el%20combo%20Festival%20Doble%20Nuevo."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Compartir02,
          title: 'COMBO PARA 2',
          info: [
            'Combo para Compartir',
            '+ 4 Piezas de Pollo',
            '+ 4 Nuggets o Alitas',
            '+ 2 Papas Cajún Grande',
          ],
          price: 'S/ 29.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20popeyes:%20Hola.%20Quiero%20el%20combo%20Para%20Dos."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Compartir03,
          title: 'DUPLA MIX',
          info: [
            'Combo para Compartir',
            '+ 4 Piezas de Pollo',
            '+ 4 Alitas o Nuggets',
            '+ 2 Papas Cajún Regular',
            '+ 2 Gaseosas Regulares (Inca/Coca)',
          ],
          price: 'S/ 34.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20popeyes:%20Hola.%20Quiero%20el%20combo%20Dupla%20Mix."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Familiar01,
          title: 'CAJUN FULL',
          info: [
            'Combos Familiares',
            '+ 6 Piezas de Pollo',
            '+ 4 Nuggets o Alitas',
            '+ 2 Papas Cajún Regulares',
            '+ 2 Gaseosas Regulares (Inca/Coca)',
          ],
          price: 'S/ 44.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20popeyes:%20Hola.%20Quiero%20el%20combo%20Cajun%20Full."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Familiar02,
          title: 'FESTI CLASICO',
          info: [
            'Combos Familiares',
            '+ 8 Piezas de Pollo',
            '+ 1 Papa Cajún Familiar',
            '+ 4 Alitas Picantes o Nuggets',
            '+ 1 Gaseosa Regular',],
          price: 'S/ 47.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20popeyes:%20Hola.%20Quiero%20el%20combo%20Festi%20Clasico."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Promocion01,
          title: 'CHICKEN MIX',
          info: [
            'Combo en Promocion',
            '+ 2 Piezas de Pollo',
            '+ 3 Nuggets',
            '+ 1 Papa Cajún Regular',
            '+ 1 Gaseosa Regular (Inca/Coca)',
          ],
          price: 'S/ 15.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20Popeyes:%20Hola.%20Quiero%20el%20combo%20Chicken%20Mix."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Promocion02,
          title: 'PRIMAVERA FEST',
          info: [
            'Combo en Promocion',
            '+ 8 Piezas de Pollo',
            '+ 4 Nuggets',
            '+ 1 Papa Cajun Familiar',
            '+ 4 Gaseosas Junior (Inca/Coca)',
          ],
          price: 'S/ 49.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20Popeyes:%20Hola.%20Quiero%20el%20combo%20Primavera%20Fest."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Promocion03,
          title: 'FESTIVAL POP',
          info: [
            'Combo en Promocion',
            '+ 10 Piezas de Pollo',
            '+ 6 Alitas o Nuggets',
            '+ 1 Papa Cajun Súper Familiar',
            '+ 4 Gaseosas Junior',
          ],
          price: 'S/ 59.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20Popeyes:%20Hola.%20Quiero%20el%20combo%20Festival%20Pop."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Promocion04,
          title: 'FESTI SÚPER FAMILIAR',
          info: [
            'Combo en Promocion',
            '+ 12 Piezas de Pollo',
            '+ 6 Nuggets',
            '+ 1 Papa Cajun Súper Familiar',
            '+ 1 Chicharron Pop',
            '+ 4 Gaseosas Junior',
          ],
          price: 'S/ 69.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20Popeyes:%20Hola.%20Quiero%20el%20combo%20festi%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: Popeyes

  // Top Content: Embarcadero
  {
    sys: {
      id: "21"
    },
    fields: {
      active: true,
      slug: "embarcadero",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Mariscos",
      speciality: "El Embarcadero",
      logo: Embarcadero,
      image_header: BG_Embarcadero,
      atention: "Lun-Dom de 12:00 - 15:00 horas",
      price_delivery: '',
      experience: 5,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Popeyes:%20Hola,%20quiero%20solicitar%20la%20carta%20completa."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: "Cevicheria El Embarcadero",
      description:
        "Un lugar sencillo de tertulia y música animada, en el que todo gira en torno a la cocina marina. Las cartas nunca dejan de tener opciones como un arroz con mariscos, ceviches en distintas variedades, chaufa de mariscos, jaleas, chilcanos, entre otros platos conocidos y bien servidos. ",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, por favor, envíanos un mensaje directo haciendo clic en el botón: CONTACTAR (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_Embarcadero //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: Combo01,
          title: 'COMBO 1',
          info: [
            'Menú Marino',
            '+ Leche de Tigre',
            '+ Chilcano',
            '+ Ceviche',
            '+ Refresco',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Menú%20Marino:%20Hola.%20Quiero%20el%20Combo%201."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Combo02,
          title: 'COMBO 2',
          info: [
            'Menú Marino',
            '+ Leche de Tigre',
            '+ Chilcano',
            '+ Chaufa de Mariscos o Pescado',
            '+ Refresco',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Menú%20Marino:%20Hola,%20quiero%20el%20Combo%202%20con%20chaufa%20de:%20[...]."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Combo03,
          title: 'COMBO 3',
          info: [
            'Menú Marino',
            '+ Leche de Tigre',
            '+ Chilcano',
            '+ Chicharron de Pota o Pescado',
            '+ Refresco',
          ],
          price: 'S/14.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Menú%20Marino:%20Hola,%20quiero%20el%20Combo%203%20con%20chicharron%20de:%20[...]."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Combo04,
          title: 'COMBO 4',
          info: [
            'Menú Marino',
            '+ Leche de Tigre',
            '+ Chilcano',
            '+ Tallarin Saltado de Mariscos',
            '+ Refresco',
          ],
          price: 'S/ 14.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Menú%20Marino:%20Hola,%20quiero%20el%20Combo%204."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
      ]
      // End Card Content
    }
  },
  // End Content: Embarcadero

  // Top Content: Sr Tako
  {
    sys: {
      id: "22"
    },
    fields: {
      active: true,
      slug: "sr_tako",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Antojitos Mexicanos",
      speciality: "Sr. Tako",
      logo: SrTako,
      image_header: BG_SrTako,
      atention: "Mar, Jue y Sab de 12:00 - 19:00 horas",
      price_delivery: '',
      experience: 5,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Comida%20Mexicana:%20Hola,%20quiero%20solicitar%20la%20carta%20completa."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
      </a>
      ,
      featured: true,
      titleDescription: "Sr. Tako",
      description:
        "Un lugar donde podras disfrutar los mas ricos tacos con una preparación mexicana​ que en su forma estándar consiste en una tortilla enrollada que contiene algún alimento dentro y algún tipo de salsa. Es considerado como uno de los platillos más representativos de la comida mexicana.. ",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, por favor, envíanos un mensaje directo haciendo clic en el botón: CONTACTAR (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_SrTako //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: BG_Logo_SrTako,
          title: 'COMBO 1',
          info: [
            '1 Burrito (Pollo, Cerdo, Res o Mixto)',
            '+ Nachos con frijoles',
            '+ Guacamole',
            '+ Salsas',
            '+ 1 Gaseosa de 300ml.',
          ],
          price: 'S/ 15.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Comida%20Mexicana:%20Hola.%20Quiero%20el%20Combo%201."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_SrTako,
          title: 'COMBO 2',
          info: [
            '3 Tacos (Pollo, Cerdo, Res o Mixto)',
            '+ Nachos con frijoles',
            '+ Guacamole',
            '+ Salsas',
            '+ 1 Gaseosa de 300ml.',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Comida%20Mexicana:%20Hola.%20Quiero%20el%20Combo%202."
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_SrTako,
          title: 'COMBO 3',
          info: [
            '3 Sincronizadas (Pollo, Cerdo, Res o Mixto)',
            '+ Delicioso queso',
            '+ Nachos con frijoles',
            '+ Salsas y guacamole',
            '+ 1 Gaseosa de 300ml.',
          ],
          price: 'S/13.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Comida%20Mexicana:%20Hola.%20Quiero%20el%20Combo%203."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_SrTako,
          title: 'COMBO 4',
          info: [
            'Torta del Chavo del 8',
            '+ Pan mexicano tipo Chihuahua',
            '+ Jamon de pierna',
            '+ Quesos blanco y edam',
            '+ Salsas de aguacate, tomate y cebolla',
            '+ Salsa pica-pica',
            '+ 1 Gaseosa de 300ml.',
          ],
          price: 'S/ 13.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Comida%20Mexicana:%20Hola.%20Quiero%20el%20Combo%204."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
      ]
      // End Card Content
    }
  },
  // End Content: Sr Tako

  // Top Content: El Costillar
  {
    sys: {
      id: "23"
    },
    fields: {
      active: true,
      slug: "el_costillar",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Rapida",
      speciality: "Chicharronería",
      logo: ElCostillar,
      image_header: BG_ElCostillar,
      atention: "Lunes -  Domingo de 9:00 - 18:00 horas",
      price_delivery: '',
      experience: 23,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=El%20Costillar:%20Hola,%20quiero%20solicitar%20la%20carta%20completa."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
      </a>
      ,
      featured: true,
      titleDescription: "El Costillar Chicharronería",
      description:
        "Chicharronería huancaína, desde 1997 estamos contigo y ahora la tradición la llevamos a tu casa Ofrecemos chicharrones, tamales, morcilla, pan con chicharrón, entre otros.. ",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, por favor, envíanos un mensaje directo haciendo clic en el botón: CONTACTAR (WhatsApp).",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_ElCostillar //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: BG_Logo_ElCostillar,
          title: 'Porcion de Chicharrón Dorado',
          info: [
            '+ Papa',
            '+ Mote',
            '+ Sarsa',
            '+ Camote',
          ],
          price: 'S/ 13.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Chicharronería%20Costillar:%20Hola.%20Quiero%20la%20porción%20de%20chicharron."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_ElCostillar,
          title: 'Porción de Costillas Doradas',
          info: [
            '+ Papa',
            '+ Mote',
            '+ Sarsa',
            '+ Camote',
          ],
          price: 'S/ 13.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Chicharronería%20Costillar:%20Hola.%20Quiero%20la%20porción%20de%20costillas."
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_ElCostillar,
          title: 'Porción de Chicharrón con Morcilla',
          info: [
            '+ Papa',
            '+ Mote',
            '+ Sarsa',
            '+ Camote',
          ],
          price: 'S/15.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Chicharronería%20Costillar:%20Hola.%20Quiero%20la%20porción%20de%20chicharron%20con%20morcilla."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_ElCostillar,
          title: 'Tamal Serrano con Chicharrón',
          info: [
            'Presa de chicharron',
            'Tamal de pollo',
            '+ Guarniciones',
          ],
          price: 'S/ 10.50',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Chicharronería%20Costillar:%20Hola.%20Quiero%20la%20porción%20de%20tamal%20con%20chicharrón."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_ElCostillar,
          title: 'Tamal Serrano con Morcilla',
          info: [
            'Morcilla',
            'Tamal de pollo',
            '+ Guarniciones',
          ],
          price: 'S/ 7.50',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Chicharronería%20Costillar:%20Hola.%20Quiero%20la%20porción%20de%20tamal%20con%20morcilla."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
        {
          image: BG_Logo_ElCostillar,
          title: 'Tamal EL COSTILLAR',
          info: [
            'Presa de chicharron',
            'Morcilla',
            'Tamal de pollo',
            '+ Camote',
            '+ Sarsa',
          ],
          price: 'S/ 14.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Chicharronería%20Costillar:%20Hola.%20Quiero%20la%20porción%20de%20tamal%20el%20Costillar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
          </a>
        },
      ]
      // End Card Content
    }
  },
  // End Content: El Costillar

  // Top Content: La Mora
  // End Content: La Mora

  // Rooms
  /*
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "single economy",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "single basic",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "single standard",
      slug: "single-standard",
      type: "single",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "single deluxe",
      slug: "single-deluxe",
      type: "single",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "family",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "family",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "family",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "presidential",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
    
  }
  */
];
