type Props = {
  list: string
}

const Newsletter: React.FC<Props> = ({ list }) => {
  return (
    <div style={{}}>
      <div className="flex items-stretch">
        <input className="bg-gray-100 rounded-lg rounded-r-none dark:bg-gray-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
        <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
      </div>
      <p className='font-small'>No spam & we respect your privacy | <a href='#'>Privacy Policy</a></p>
    </div>
  );
};

export default Newsletter;
