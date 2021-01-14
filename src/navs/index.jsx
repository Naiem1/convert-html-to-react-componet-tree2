import { Link } from "@reach/router";



const NavLink = props => {
  console.log('NavLink>>', {...props});
  return  <Link
  {...props}
  getProps={({ isCurrent }) => {
    // the object returned here is passed to the
    // anchor element's props
    return {
      style: {
        color: isCurrent ? "#FFCD21" : ""
      }
    };
  }}
/>
}
  
 


export default NavLink;