import PropTypes from 'prop-types';
import { string } from 'prop-types';


export const Contact=function({contacts, onDeleteContact}){

return(<ul>
    {contacts.map(({id,name,number})=>
    
    <li key={id}>
        <p>{name}</p> 
        <p>{number}</p>
        <button type="button" onClick={()=>{onDeleteContact(id)}}>Delete</button>
    </li>
    )
    }
 
</ul>)
} 

Contact.propTypes={
    
    contacts: PropTypes.array.isRequired,

}


 




