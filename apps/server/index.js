// index.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  const query = `INSERT INTO contacts(name, email, message) VALUES (?, ?, ?)`;

  db.run(query, [name, email, message], function (err) {
    if (err) return res.status(500).json({ error: "Database error" });
    res.status(200).json({ message: "Contact form submitted", id: this.lastID });
  });
});

const Links = JSON.stringify([
  "http://www.instagram.com",
  "http://www.linkedin.com",
  "https://github.com/ibtisaaamr0"
]);
// db.run(`INSERT INTO contact_info(email,links,img) VALUES(?,?,?)`,

//   [
//     "ibtisaaamr00@gmail.com",
//     Links,
//     "/contact.jpg"
//   ],
//   (err,row)=>{
//   if(err) throw new Error(err.message,"error")
//     console.log("inserted in contact",JSON.stringify(Links,null,2))

//   }
// )

db.run(`UPDATE contact_info SET email=?`,["Ibtisaaamr00@gmail.com"],(err)=>{
  if(err) throw new Error(err.message,"error")
    console.log("email ")
})
// Fetch all contact info
app.get("/api/contact_info", (req, res) => {
  db.all("SELECT * FROM contact_info", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const contactData = rows.map(row => {
      try {
        row.links = row.links ? JSON.parse(row.links) : [];
      } catch {
        row.links = [];
      }
      return row;
    });

    res.json(contactData);
  });
});



db.get("SELECT * FROM user", (err, row) => {
  if (err) {
    console.error("Database error:", err);
  } else if (!row) {
    db.run(
      `INSERT INTO user(user, bio, profile_pic, Skill_pic,about) VALUES (?, ?, ?,?, ?)`,
      [
        "Ibtisam",
        "A passionate developer building amazing things.",
        "/user-image.png",
        "/Work-4.png",
        "I’m a passionate developer with a strong interest in building modern web applications using the latest technologies. I love turning ideas into reality with code."
      ],
      (err) => {
        if (err) console.error("Failed to insert default user:", err);
        else console.log("Default user inserted into database.");
      }
    );
  }
});


// db.run(`UPDATE user SET bio=?`, ["A passionate developer building amazing things."], (err)=>
// {
//   if(err) throw new Error(error.message,"error")
//     console.log("updated")
// })

app.get("/api/user", (req, res) => {
  db.get("SELECT * FROM user", [], (err, row) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (!row) return res.json({}); // no user found

    // Parse Links safely
    let Links = [];
    try {
      Links = JSON.parse(row.Links);
      if (!Array.isArray(Links)) Links = [Links];
    } catch (e) {
      // if parsing fails, keep as array of string
      Links = row.Links ? [row.Links] : [];
    }

    // Send back user with Links as array
    res.json({ ...row, Links });
  });
});


app.get("/api/user", (req, res) => {

    db.get("SELECT * FROM user", [], (err, row) => {
      if (err) return res.status(500).json({ error: "Database error" });

      const result = {};
      if (row) {
        columns.forEach(col => {
          result[col.name] = row[col.name]; // map all columns dynamically
        });
      }
      res.json(result);
    });
  });


const defaultProjects = [
  {
    Pname: "Burberry Clone",
    Pdes: "Basic React + CSS",
    Pinfo: "A simple responsive Burberry homepage clone showcasing modern web layout and design using only React and plain CSS.",
    Pimg: JSON.stringify(["/p1.png", "/p2.png"]) 
  },
  {
    Pname: "Car Rental System",
    Pdes: "HTML + CSS + PHP",
    Pinfo: "A simple Web page only used for a project for Database to enter cars in database and fetch them accordingly.",
    Pimg: "/work2.png"
  }
];

// // Insert default projects
// defaultProjects.forEach(project => {
//   db.run(
//     `INSERT INTO projects (Pname, Pdes, Pinfo, Pimg) VALUES (?, ?, ?, ?)`,
//     [project.Pname, project.Pdes, project.Pinfo, project.Pimg],
//     (err) => {
//       if (err) console.error("Failed to insert project:", err);
//       else console.log(`Project "${project.Pname}" inserted into database.`);
//     }
//   );
// });


// db.run(`DELETE FROM projects where id=?`, [4], (err) => {
//   if (err) console.error(err);
//   else {
//     console.log(" projects deleted successfully.");
//   }
// });


// db.run(`UPDATE projects SET Pname=? where id=?` ,["Ibtisam",1], (err)=>{
//   if (err) console.error(err);
//   else {
//     console.log(" projects updated successfully.");
//   }
// })


app.get("/api/projects", (req, res) => {
  db.all("SELECT * FROM projects", [], (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });

    const projects = rows.map(row => {
      try {
        row.Pimg = JSON.parse(row.Pimg); 
      } catch (e) {
        row.Pimg = [row.Pimg];
      }

      if (!Array.isArray(row.Pimg)) {
        row.Pimg = [row.Pimg];
      }

      return row;
    });

    res.json(projects); 
    console.log(JSON.stringify(projects, null, 2)); 
  });
});


app.get("/", (req, res) => {
  res.status(200).json({ status: "Success" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
