import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { DataSnapshot } from 'firebase/database';
import app from "./firebaseconfig";
const db = getDatabase(app);

export const sendData = (nodeName: string, data: any) => {
  data.id = push(ref(db, `${nodeName}`)).key;

  const reference = ref(db, `${nodeName}/${data.id}`);
  set(reference, data);
};

export const getData = async (nodeName: string, id?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    onValue(reference, (snapshot: DataSnapshot) => {
      const data = snapshot.val();
      if (data) {
        if (id) {
          resolve({ id, ...data });
        } else {
      
          const dataArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
          resolve(dataArray);
        }
      } else {
        resolve([]); 
      }
    }, (error) => {
      reject(error); 
    });
  });
};

