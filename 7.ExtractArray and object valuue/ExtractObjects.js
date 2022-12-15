// How to extract a value from object
const newObject = { name: "exaltechs", add: "peer burhaan" };
// by dot notation
const a = newObject.name;
const b = newObject.add;
// console.log(a);
// console.log(b);
// By destructuring
// const { name, add } = newObject;
// console.log(name);
// console.log(add);
// by bracket notation
const c = newObject["name"];
// console.log(c);
// ============================================
const obj = {
  name: "saif",
  surname: "khan",
  phone: 9876543210,
  id: 555,
  email: "saifkhan.a28@gmail.com",
};
// ======== by dot notation ===============
const k = obj.name;
const l = obj.add;
const m = obj.phone;
const n = obj.surname;
const o = obj.email;
const p = obj.id;
// console.log(k);
// console.log(l);
// console.log(m);
// console.log(n);
// console.log(o);
// console.log(p);
// ========= by destructuring ===========
const { name, surname, phone, email, id } = obj;
// console.log(name, surname, phone, email, id);
// =============by bracket notation ===============
const ab = obj["name"];
const ac = obj["surname"];
const ad = obj["phone"];
const ae = obj["email"];
const af = obj["id"];
console.log(ab);
console.log(ac);
console.log(ad);
console.log(ae);
console.log(af);
