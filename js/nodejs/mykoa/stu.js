const fs = require('fs');
const koa = require('koa');
const path = require('path');
const static = require('koa-static');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');


const app = new koa();
const filleName = "./stu.json";

app.use(static(path.join(__dirname, "public")));
app.use(bodyparser());

router.post("/api/student", (ctx, next) => {
    let stu = ctx.request.body;
    if (!fs.existsSync(filleName)) {
        fs.writeFileSync(filleName, "[]");
    }

    let str = fs.readFileSync(filleName);
    let stus = JSON.parse(str);
    stus.push(stu);

    fs.writeFileSync(filleName, JSON.stringify(stus));

    ctx.body = stu;
});


router.get("/api/student", (ctx, next) => {
    if (!fs.existsSync(filleName)) {
        fs.writeFileSync(filleName, "[]");
    }

    let student = fs.readFileSync(filleName);
    ctx.body = student;
});

// app.use(async ctx => {
//     app.body = "eleVio";
//     console.log("accept", ctx.request.url);
// });

app.use(router.routes());

app.listen(8080);

console.log("koa1 listen in http://localhost8080");