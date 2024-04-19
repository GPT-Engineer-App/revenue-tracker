import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Business Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sales Card */}
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="flex items-center space-x-4">
              <FaShoppingCart className="text-3xl text-blue-500" />
              <h2 className="card-title">Sales</h2>
            </div>
            <p className="text-5xl">1,234</p>
            <p className="text-gray-500">Transactions this month</p>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="flex items-center space-x-4">
              <FaDollarSign className="text-3xl text-green-500" />
              <h2 className="card-title">Revenue</h2>
            </div>
            <p className="text-5xl">$123K</p>
            <p className="text-gray-500">Earnings this month</p>
          </div>
        </div>

        {/* Customers Card */}
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div className="flex items-center space-x-4">
              <FaUsers className="text-3xl text-orange-500" />
              <h2 className="card-title">Customers</h2>
            </div>
            <p className="text-5xl">567</p>
            <p className="text-gray-500">New customers this month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
