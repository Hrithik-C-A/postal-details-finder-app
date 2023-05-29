import { useEffect, useState } from "react";
import axios from "axios";
import '../PincodePage.css';

const PincodePage = () => {
  const [pincode, setPincode] = useState(678641);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });

  }

  return (
    <div>
      <a href="/" className="home-link">Home</a>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Enter Pincode" onChange={(e) => setPincode(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data === null || data === undefined || data[0].PostOffice === null ? (
            <h1>No data found</h1>
          ) : (
          <>
          <h3>{data[0].Message} <span className="push-left">Status: {data[0].Status}</span></h3>
            <table>
              <thead>
                <tr>
                  <th>Block</th>
                  <th>BranchType</th>
                  <th>Circle</th>
                  <th>Country</th>
                  <th>DeliveryStatus</th>
                  <th>District</th>
                  <th>Division</th>
                  <th>Name</th>
                  <th>Pincode</th>
                  <th>Region</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {data[0].PostOffice.map((result,index) => (
                  <tr key={index}>
                    <td>{result.Block}</td>
                    <td>{result.BranchType}</td>
                    <td>{result.Circle}</td>
                    <td>{result.Country}</td>
                    <td>{result.DeliveryStatus}</td>
                    <td>{result.District}</td>
                    <td>{result.Division}</td>
                    <td>{result.Name}</td>
                    <td>{result.Pincode}</td>
                    <td>{result.Region}</td>
                    <td>{result.State}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          )
        )}
      </div>
    </div>
  );
};

export default PincodePage;
