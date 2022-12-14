import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
// import Table from "../../components/table/Table";

const Home = ({ logout, user_name, getData, datatable_data,this_user_id }) => {
  console.log(datatable_data);
  console.log(user_name,this_user_id);
  return (
    <div className="home">
      <Sidebar user_name={user_name} getData={getData} logout={logout} this_user_id={this_user_id}  />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="user" /> */}
          {/* <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        <div className="charts">
          {/* <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          {/* <Table datatable_data={datatable_data} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
