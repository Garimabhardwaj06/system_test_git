import React from 'react';
import SortableTbl from 'react-sort-search-table';
import PropTypes from 'prop-types';
import ModalComp from './modalComp'
import axios from 'axios'; 

class BaseProductDeleteComponent extends React.Component{

     url = 'api/shop/'+this.props.rowData.userId.toString()+"/"
  
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    deleteItem=()=>{
        fetch(`http://localhost:8000/api/shop/${this.props.rowData.userId}/`, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'application/json',
                }
            })
            .then(() => {
                window.location.reload();

                
                    });


    }
    render () {
        return (	
            <td >	
                <input type="sumbit" className="btn btn-danger" value="Delete" onClick={this.deleteItem}/>
            </td>
        );
    }
}
 
BaseProductDeleteComponent.propTypes = {
    rowData: PropTypes.object,
    tdData: PropTypes.string,
    
};

 
class BaseProductEditComponent extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        addContainer: false
     }
    }

    editItem=()=>{
        this.setState({addContainer:!this.state.addContainer})
        
        
    }

    render () {
    
        

        return (	
            <td >
                {this.state.addContainer &&  <ModalComp existingData = {this.props.rowData} isOpen={this.state.addContainer}/>}
                <input type="submit" className="btn btn-warning" value="Edit" onClick={() => this.editItem()}/>
            
            </td>
        );
    }
}
BaseProductEditComponent.propTypes = {
    rowData: PropTypes.object,
    tdData: PropTypes.string,
};
 
const ProductsTblPage = (props) =>{

    let col = [
        "name",
        "status",
        "date",
        "delete", 
        "edit"
    ];
    let tHead = [
        "Name",
        "Status",
        "Date",
        "Delete", 
        "Edit"		
    ];
 
    return (
        <SortableTbl tblData={props.data}
            tHead={tHead}
            customTd={[
                {custd: BaseProductEditComponent, keyItem: "edit"},
                {custd: BaseProductDeleteComponent, keyItem: "delete"}
                ]}
            dKey={col}
        />
    );
};
 
ProductsTblPage.propTypes = {
};


export default ProductsTblPage

