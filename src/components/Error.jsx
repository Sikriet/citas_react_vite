// "children" guarda todo lo que le pases a un componete. Ya sea una función o un código HTML. 
const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {children}
    </div>
  );
};

export default Error;
