// function A() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('A completed');
//     }, 500);
//   });
// }
// function B() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('B completed');
//     }, 2000);
//   });
// }
// function C() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('C completed');
//     });
//   }, 1000);
// }
// A()
//   .then((res) => {
//     console.log(res);
//     return B();
//   })
//   .then((res) => {
//     console.log(res);
//     return C();
//   })
//   .then((res) => console.log(res));


// function sleep(ms = 300) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function authenticate(username, password) {
//   await sleep(2000);
//   if (username === 'admin' && password === 1234) {
//     console.log('Logged in');
//     return { succes: true };
//   } else {
//     throw new Error('Invalid login or password');
//   }
// }

// async function getPosts() {
//   await sleep(2000);
//   console.log('Getting posts');
//   await sleep(2000);
//   return [
//     { title: 'Message', body: 'Message body' },
//     { title: 'Message', body: 'Message body' }
//   ];
// }

// authenticate('admin', 1234)
//   .then((res) => {
//     getPosts()
//       .then((posts) => {
//         if (!posts.length) {
//           throw new Error('No posts');
//         }
//         console.log(posts);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

// class UserApi {
//   getUser() {
//     return new Promise((res) => {
//       setTimeout(() => {
//         res({ name: "John", age: 45 });
//       }, 200);
//     });
//   }

//   createUser(user) {
//     return new Promise((res) => {
//       setTimeout(() => {
//         res(user);
//       }, 1500);
//     });
//   }
// }

// const api = new UserApi();

// api.getUser().then((name) => console.log(name));
// api.createUser({ name: "Jane", age: 19 }).then((name) => console.log(name));

// function sleep(ms = 300) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// class UserApi {
//   async getUser() {
//     await sleep(1500);

//     return { name: "John", age: 45 };
//   }

//   async createUser(user) {
//     await sleep(1500);

//     return user;
//   }
// }

// const api = new UserApi();

// api.getUser().then((name) => console.log(name));
// api.createUser({ name: "Jane", age: 19 }).then((name) => console.log(name));
const button = document.querySelector('.btn');
button.addEventListener('click', addMembers);

async function getEmployees() {
  let file = await fetch('Promises/employees.json');
  if (file.ok) {
    return file.json();
  } else {
    throw new Error('Failed to fetch');
  }
}

async function addMembers() {
  let tableBody = document.querySelector('.employees');
  tableBody.innerHTML = await getImage();
  let employeeCollection = await getEmployees();
  let html = '';
  employeeCollection.forEach((el) => {
    html += getRowHTML(el.id, el.name, el.status);
  });
  tableBody.innerHTML = html;
}

function getRowHTML(id, name, status) {
  return `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${status ? 'active' : 'disabled'}</td>
    </tr>   `;
}

async function getImage() {
  let img = await fetch('Promises/img.json');
  if (img.ok) {
    let url = await img.json()
    return `
     <tr>
        <td colspan="3">
          <img
            src="${url.url}"
          />
        </td>
      </tr>`;
  } else {
    return `
    <tr>
       <td colspan="3">
         FAILED TO LOAD A GIF
       </td>
     </tr>`;
  }
}
