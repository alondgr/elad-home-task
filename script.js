let websites = [
    {
        "id": "1",
        "name": "google",
        "url": "www.google.com",
        "subData": [
            {
                "id": "2",
                "name": "walla",
                "url": "www.walla.co.il"
            },
            {
                "id": "3",
                "name": "ynet",
                "url": "www.ynet.co.il",
                "subData": [
                    {
                        "id": "4",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    },
                    {
                        "id": "5",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "6",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "7",
                "name": "google",
                "url": "www.google.com"
            }
        ]
    },
    {
        "id": "8",
        "name": "ynet",
        "url": "www.ynet.co.il",
        "subData": [
            {
                "id": "9",
                "name": "walla",
                "url": "www.walla.co.il"
            },
            {
                "id": "10",
                "name": "google",
                "url": "www.google.com",
                "subData": [
                    {
                        "id": "11",
                        "name": "ynet",
                        "url": "www.ynet.co.il",
                        "subData": [
                            {
                                "id": "12",
                                "name": "walla",
                                "url": "www.walla.co.il"
                            },
                            {
                                "id": "13",
                                "name": "google",
                                "url": "www.google.com"
                            },
                            {
                                "id": "14",
                                "name": "mako",
                                "url": "www.mako.co.il"
                            }
                        ]
                    },
                    {
                        "id": "15",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "16",
                        "name": "mako",
                        "url": "www.mako.co.il"
                    }
                ]
            },
            {
                "id": "17",
                "name": "walla",
                "url": "www.walla.co.il",
                "subData": [
                    {
                        "id": "18",
                        "name": "ynet",
                        "url": "www.ynet.co.il"
                    },
                    {
                        "id": "19",
                        "name": "google",
                        "url": "www.google.com"
                    },
                    {
                        "id": "20",
                        "name": "walla",
                        "url": "www.walla.co.il"
                    }
                ]
            },
            {
                "id": "21",
                "name": "mako",
                "url": "www.mako.co.il"
            }
        ]
    }
]

function presentData(data) {

    let tag = '<ul class="top">';

    tag += '<li>' + 'Id: ' + data.id + '<br> ' + '</li>'
    tag += '<li>' + 'Site Name: ' + data.name + '<br> ' + '</li>'
    tag += `<a class="link" href=${`https://` + data.url}>Site Url: ${data.name} </a>`

    if (data.subData) {
        for (let i = 0; i < data.subData.length; i++) {
            tag += presentData(data.subData[i])
        }
    }
    return tag + '</ul>';
}

let res = '';

for (let i = 0; i < websites.length; i++) {
    res += presentData(websites[i])
}

document.querySelector('.one').innerHTML = res;