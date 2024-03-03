const container = document.createElement('div');
container.className='container';
container.id = 'mainCont';

const table = document.createElement('table');
table.className='table table-dark';
table.id='mainTable';

var tHead = document.createElement('thead')
var tBody = document.createElement('tbody')

function trall(){
var tr = document.createElement('tr')
return tr;
}
function thtd(tag,idvalue,classValue,content){
    var ele = document.createElement(tag)
    ele.id=idvalue;
    ele.scope=classValue;
    ele.innerHTML = content;
    return ele;
}
var thead_tr = trall();

var th_theadname = thtd('th','name','col-md-2','NAME')
var th_theadloc = thtd('th','location','col-md-2','LOCATION')
var th_theaddown = thtd('th','download','col-md-2','DOWNNLOAD')
var th_theadplay = thtd('th','play','col-md-2','PLAY')

async function fetchData(){
    const fetchData = await fetch('https://xeno-canto.org/api/2/recordings?query=cnt:brazil')
    const fetchDatajsn = await fetchData.json()
    const res = fetchDatajsn.recordings

    res.forEach(element => {
        var tbody_tr = trall();

        var th_tbodyname = thtd('td','name','col-md-2',element.rec)
        var th_tbodyloc = thtd('td','location','col-md-2',element.loc)
        var th_tbodydown = thtd('td','download','col-md-2',`<a href=${element.file}>Download</a>`)
        var th_tbodyplay = thtd('td','play','col-md-2',`<audio controls src=${element.file}><audio>`)

        tBody.append(tbody_tr)
        tbody_tr.append(th_tbodyname,th_tbodyloc,th_tbodydown,th_tbodyplay)
    });
}
fetchData();

thead_tr.append(th_theadname,th_theadloc,th_theaddown,th_theadplay)

tHead.append(thead_tr)

table.append(tHead,tBody);
document.body.append(table);