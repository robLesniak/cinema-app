import React, {Component} from 'react';
import axios from 'axios';
import "./style.css";


class Reservation extends Component {
    constructor() {
        super();
        this.state = {
            hallID: "",
            movieID: "",
            seanceDate: "",
            seatsBooked: []
        };
    }

   /* componentWillMount() {
        const { id } = this.props;
        this.setState({ id })
        const { hallID } = this.props;
        this.setState({hallID})
    }

    componentWillReceiveProps(nextProps) {
        const { id } = nextProps;
        this.setState({ id })
    }
*/
    componentDidMount() {
        axios.get('http://51.15.102.229:5000/api/seans/2')
        .then(res =>  {
            console.log(res.data)
            const movie = res.data;
            const hallid = movie.hallID;
            this.setState({hallID: hallid});
            //const movieID = res.data;
            this.setState({movieID: movie.movieID});
            //const seanceDate = res.data;
            this.setState({seanceDate: movie.seanceDate});
           // const seatsBooked = res.data;
            this.setState({seatsBooked: movie.seatsBooked});
        })
    }

    

    render() {
        
        return(
            
            <div> <h1><font color="silver">Book your ticket! </font> </h1> 
                      <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      
    </div>
    <div class="col-md-auto">
    <div className="col-md-12">
                    <table >
                    {[...Array(5)].map((x, i) =>
                            <tbody>
 
                        
                        {[...Array(10)].map((x, no) =>
                            <th > <div className="place" key={no+1}>{no+1}</div></th>
                        )}
                         </tbody>
                    )}
                    
                    </table>
                    
                    
                    </div>
    </div>
    <div class="col col-lg-2">
    
    </div>

    
  </div>
               
                    </div>
                    
                      
                        
        );
    }

}

export default Reservation