import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import { connect } from "react-redux";
import firebase from "../../config/firebaseConfig";
import { Redirect } from "react-router-dom";

class Reservation extends Component {
  constructor() {
    super();
    this.state = {
      hall_movieId: "",
      movieID: "",
      seanceDate: "",
      seatsBooked: [],
      userSeats: [],
      title: "",
      redirect: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://51.15.102.229:5000/api/seans/${
          this.props.match.params.seanceId
        }`
      )
      .then(res => {
        const movie = res.data;
        console.log(movie);
        this.setState({ hall_movieId: movie[0].hall_movieID });

        this.setState({ seanceDate: movie[0].seanceDate });
        //const movieID = res.data;
        this.setState({ movieID: movie[0].movieID });
        //const seanceDate = res.data;
        this.setState({ seanceDate: movie[0].seanceDate });
        axios
          .get(
            `http://51.15.102.229:5000/api/seatbooked/${
              this.props.match.params.seanceId
            }`
          )
          .then(res => {
            const movie = res.data;

            this.setState({ seatsBooked: movie });
          });
        // const seatsBooked = res.data;
      });

    firebase
      .firestore()
      .collection("films")
      .doc(this.props.match.params.movieId)
      .get()
      .then(doc => this.setState({ title: doc.data().title }));
  }

  onclick = e => {
    let array = this.state.userSeats;
    if (array.includes(e.target.attributes.name.nodeValue.substring(1))) {
      array.splice(
        array.indexOf(e.target.attributes.name.nodeValue.substring(1)),
        1
      );
    }
    console.log(e.target.attributes.name.nodeValue);
    if (e.target.style.backgroundColor === "rgb(0, 255, 0)") {
      this.setState({
        [e.target.name]: (e.target.style.backgroundColor = "")
      });
    } else {
      array.push(String(e.target.attributes.name.nodeValue).substring(1));
      this.setState({
        [e.target.name]: (e.target.style.backgroundColor = "#00FF00"),
        userSeats: array.sort()
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const newReservationFire = {
      movieID: this.state.movieID,
      seanceDate: this.state.seanceDate,
      userSeats: this.state.userSeats,
      userUid: this.props.auth.uid,
      hall_movieId: this.state.hall_movieId,
      createdAt: new Date()
    };

    firebase
      .firestore()
      .collection("reservations")
      .add(newReservationFire);

    let updateSeats = [];

    this.state.userSeats.map(seat => {
      updateSeats.push({
        hall_movieID: this.state.hall_movieId,
        seatIsTaken: 1,
        seatNumber: seat
      });
    });

    axios
      .post("http://51.15.102.229:5000/api/seats", updateSeats)
      .then(() => {
        console.log("cze");
        this.setState({ redirect: true });
      })
      .catch(err => console.log("siema"));

    // this.props.push.history("/repertoire");
  };

  render() {
    const { redirect } = this.state;

    return redirect ? (
      <Redirect to="/repertoire" />
    ) : (
      <div>
        {" "}
        <h1>
          <font color="silver">Book your ticket for {this.state.title} ! </font>{" "}
        </h1>
        <div class="row justify-content-md-center">
          <div class="col col-lg-2">
            <form>
            <div class="row justify-content-md-center">
              <div className="legend">
              <table>
                <tbody>
                <th>
                  <tr><div className="free"> </div> </tr>
                  
                  <tr><div className="booked"> </div></tr>
                  
                  <tr> <div className="chosen"> </div></tr>
                  
                </th>
                <th>
                <tr className="text"> <font color="silver"> Free  </font></tr>
                <tr> </tr>
                <tr className="text"> <font color="silver"> Booked </font></tr>
                
                <tr className="text"> <font color="silver"> Your seats</font></tr>
                </th>
                </tbody>
              </table>
              </div>
              </div>
            </form>
          </div>  
          <div class="col-md-auto">
            <div className="col-md-12 vertical-align:center">
              {this.state.seatsBooked === null ? null : (
                <table>
                  {[...Array(5)].map((x, i) => (
                    <tbody>
                      {[...Array(10)].map((x, no) => (
                        <th>
                          {this.state.seatsBooked.includes(
                            Number(String(i + 1) + String(no + 1))
                          ) ? (
                            <div
                              className="place"
                              style={{ backgroundColor: "red" }}
                              name={Number(`${i + 1}${no + 1}`)}
                            >
                              {no + 1}
                            </div>
                          ) : (
                            <div
                              className="place"
                              name={"a" + Number(`${i + 1}${no + 1}`)}
                              style={{
                                backgroundColor: this.state.a212
                              }}
                              onClick={this.onclick}
                            >
                              {no + 1}
                            </div>
                          )}
                        </th>
                      ))}
                    </tbody>
                  ))}
                </table>
              )}
            </div>
          </div>
          <div className="col col-lg-2" >
          <form>
          <div class="row justify-content-md-right">
                                 <table>
                                  <th>
                                    <tr><div className="info"> Your choice:  </div> </tr>
                                    <tr><div className="info"> $ps['name']  </div> </tr>
                                  </th>
                                </table>
            </div>
            </form>
            <form>
          <div class="row justify-content-md-right">
          <table>
                                  <th>
                                    <tr><div className="buy"> Order ticket as:  </div> </tr>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="adults" name="variants"/>
                                    <label class="custom-control-label" for="adults"> <font color="white"> Adults </font></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="student" name="variants"/>
                                    <label class="custom-control-label" for="student"> <font color="white"> Student</font></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="children1" name="variants"/>
                                    <label class="custom-control-label" for="children1"> <font color="white"> Children under 10 yo</font></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="children2" name="variants"/>
                                    <label class="custom-control-label" for="children2"> <font color="white"> Children above 10 yo</font></label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" id="adults2" name="variants"/>
                                    <label class="custom-control-label" for="adults2"> <font color="white"> Adults above 60 yo</font></label>
                                    </div>
                                  </th>
            </table>
            </div>
            </form>
          </div>
        </div>
        <div class="row justify-content-md-center">
        <div class="col col-lg-2" />
        
          <div class="col-md-auto">
            <div className="col-md-12">
            <div className="col col-lg-2" />
              {this.state.seatsBooked === null ? null : (
                <table>
                  {[...Array(5)].map((x, i) => (
                    <tbody>
                      {[...Array(15)].map((x, no) => (
                        <th>
                          {this.state.seatsBooked.includes(
                            Number(String(i + 6) + String(no + 1))
                          ) ? (
                            <div
                              className="place"
                              style={{ backgroundColor: "red" }}
                              name={Number(`${i + 6}${no + 1}`)}
                            >
                              {no + 1}
                            </div>
                          ) : (
                            <div
                              className="place"
                              name={"a" + Number(`${i + 6}${no + 1}`)}
                              style={{
                                backgroundColor: this.state.a212
                              }}
                              onClick={this.onclick}
                              >
                              {no + 1}
                            </div>
                          )}
                        </th>
                      ))}
                    </tbody>
                  ))}
                </table>
              )}
            </div>
            <button
              className="btn btn-lg btn-outline-light mr-2"
              style={{
                backgroundColor: "#0051a5",
                fontwe: "bold",
                marginLeft: "5px",
                marginBottom: "5px",
                marginTop: "5px",
                border: "none"
              }}
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
          <div className="col col-lg-2" />
        </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Reservation);
