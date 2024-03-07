import React, { Component } from "react";
// Component Card
import ReactDOM from "react-dom";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

// Component Card
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import StyledHero from "../components/StyledHero";

// Style Card
import "../css/styles-card.css";
const styles = theme => (
  {
    card: {
      width: 300,
      margin: "auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,1)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,1)"
      }
    },
    media: {
      paddingTop: "56.25%"
    },
    title: {
      fontFamily: "'Dancing Script', sans-serif, cursive",
      color: "#FFFFFF",
      fontSize: "40px",
      fontWeight: 300,
      lineHeight: 1.5,
    },
    type: {
      color: "#999999",
      fontStyle: "italic",
    },
    content: {
      textAlign: "left",
      padding: theme.spacing.unit * 3
    },
    divider: {
      margin: `${theme.spacing.unit * 3}px 0`,
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -theme.spacing.unit
      }
    },
    delivery: {
      fontSize: "11px",
      color: "#999999",
      fontWeight:"400",
      fontFamily: "'Roboto', Helvetica, Arial",
      listStyleType: "none",
      gridRowGap: "0.2rem",
      display: "grid",
    }
  }
);

class SingleRoom extends Component {
  state = {
    searchNodes:""
  };
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { classes } = this.props;
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no se puede encontrar el restaurante...</h3>
          <Link to="/rooms" className="btn-primary">
            volver a restaurantes
          </Link>
        </div>
      );
    }
    const {
      active,
      name,
      district,
      type,
      speciality,
      image_header,
      experience,
      home,
      workshop,
      contact,
      titleDescription,
      description,
      titleDescription02,
      description02,
      capacity,
      size,
      extras,
      images,

      // Card define
      card,
      logo,
      atention,
      price_delivery,
    } = room;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero className="headers" img={image_header || this.state.defaultBcg}>{/* images[0] */}
          <Banner title={`${speciality}`}>
            <Link to="/rooms" className="btn-primary">
              volver a restaurantes
            </Link>
          </Banner>
        </StyledHero>
        {(active === true) ? 
        <section className="single-room">
          <div className="logCom"><img src={logo} className="log" style={{display: "block", margin: "auto"}} /></div>
          {/* <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div> */}
          <div className="single-room-info">
            <article className="desc">
              {(titleDescription != '') ? <h3>{titleDescription}</h3> : <h3>Detalles</h3>}
              <p>{description}</p>
              {(titleDescription02 != '') ? <h6 style={{marginTop: "1em"}}>{titleDescription02}</h6> : ""}
              <p>{description02}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              {(name != '')?<h6>Nombres: {name}</h6>:''}
              {/* <h6>Área: {type}</h6> */}
              {(experience > 0) ? <h6>Experiencia: {experience} años</h6> : ''}
              <h6>Especialdad: {speciality}</h6>
              {/* <h6>Tamaño : {size} SQFT</h6> */}
              {/*
              <h6>
                capacidad max :
                {capacity > 1 ? `${capacity} personas` : `${capacity} persona`}
              </h6>
              */}
              <h6>Distrito: {district}</h6>
              <h6 style={{fontWeight: "600"}}>{home ? "Atención a domicilio (previa coordinación)" : ""}</h6>
              <h6>{workshop && "Atención en taller"}</h6>
              {(contact != '')
                ?
                  <div style={{textAlign: "left", marginTop: "1em"}}>
                    {contact}
                  </div>
                :
                  ''
              }
            </article>
          </div>
        </section>
        : ''}

        {/* Section Card */}
        <section className="cards">
          <div className="cards-overlay"></div>
          <div className="title">
            {/* <span>- {speciality} -</span> */}
            <span>- Carta y precios -</span>
            <div className="subtitle">Los más pedidos</div>
            {/* <div className="logCom"><img src={logo} className="log" /></div> */}
            <div className="content-atention">
              <span className="atention">🔥Delivery: {atention} </span>
            </div>
          </div>
          <div className="App">
            {card.map(item => {
              return (
                <article key={`item-${item.title}`}>
                  <Card className={classes.card}>
                    <CardMedia className={styles.media} image={item.image} />
                  </Card>
                  <Card className={classes.card}>
                    <CardMedia className={classes.media} image={item.image} />
                    <CardContent className={classes.content}>
                      <Typography className={'MuiTypography--heading'} variant={'h6'} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography className={classes.type} variant={'subtitle1'} gutterBottom>
                        {item.type}
                      </Typography>
                      {(item.info).map((item) => (
                        <Typography className={'MuiTypography--heading'} variant={'subtitle2'} gutterBottom>
                          {item}
                        </Typography>
                      ))}
                      <Typography className={"MuiTypography--subheading"} variant={"subtitle2"} gutterBottom>
                        <h3 style={{ marginTop: "0.5em", marginBottom: "0.5em" }}>
                          Precio: {item.price}
                        </h3>
                      </Typography>
                      {(price_delivery != '')
                        ?
                        <h3 className={classes.delivery}><li>*El Precio no incluye el costo por envio.</li><li>*El costo por envio es a partir de {price_delivery}</li></h3>
                        :
                        <h3 className={classes.delivery}>*El Precio no incluye el costo por envio, el costo por envio se calcula de acuerdo a la distancia.</h3>
                      }
                      <Divider className={classes.divider} light />
                      <div style={{ textAlign: "center" }}>
                        {item.button}
                      </div>
                    </CardContent>
                  </Card>
                </article>
              );
            })}
          </div>
        </section>
        {/* End Section Card */}
        
        <section className="room-extras">
          <div>
            <h6>Extras </h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}
export default withStyles(styles)(SingleRoom);
