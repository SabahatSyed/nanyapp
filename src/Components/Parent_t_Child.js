import React from 'react'
import AllChilds from './All_Childs'
import ParentDetails from './ParentDetails'
import { Parents } from './Parents';


function Parent_t_Child(props) {



    return (
        <>
  {
                Parents.filter(function (parent) {
                    return parent.id === props.parent;
                }).map((val, id) => {

                    const a = val.img

                    return <ParentDetails
                    key={id}
                    parent={val.parent}
                    username= {val.username}
                    Date_of_Birth={val.Date_of_Birth}
                    Gender ={val.Gender}
                    Address={val.Address}
                    email={val.email}

       




                    img={require('./profile/img' + a + '.png')}


                    />
                })
            }


            <AllChilds p={props.parent} />


        </>
    )
}

export default Parent_t_Child