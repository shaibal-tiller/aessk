import { collection,Timestamp, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export const display=(data)=>{
  
}

export const  upload=  (data)=>{

      addDoc(collection(db, "users"), {
       ...(data),
       created:Timestamp.now()
      }).then((res)=>{console.log('done');})
      .catch(e=>console.log(e));
      
    //   console.log("Document written with ID: ", docRef);
    // try {
    //     await addDoc(collection(db, 'users'), {
    //       ...(data),
    //       created: Timestamp.now()
    //     })
    //     // onClose()
    //   } catch (err) {
    //     alert(err)
    //   }
}

export const download=()=>{
    
}