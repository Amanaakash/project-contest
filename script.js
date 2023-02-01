let url1 = "https://kontests.net/api/v1/all"
let response = fetch(url1)

response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  console.log(typeof(contests))
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    ihtml += `
      <div class="card" style="width: 22rem;">
        <img src=${images[item]} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p>Starts At:${contests[item].start_time}</p>
          <p>Ends At:${contests[item].end_time}</p>
          <p>Site:${contests[item].site}</p>
          <p>In 24 Hrs :${contests[item].in_24_hours}</p>
          <a href="${contests[item].url}" class="btn btn-primary">visit here</a>
        </div>
      </div>
    `
  }
  cardContainer.innerHTML = ihtml
})



const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEMdctSMdh8APuHNAm2-W0uTTh2VsES-YxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3xA2OeIRsckOlvxOibrxmfnrSXer0KQcA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsw3Az8Tx5UWAkSfcBNgrbcp5iT6fWAVLKw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Xuzu4-Ji2uU1nJcvo4NFz1mZUVk5-LADg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xwDvuuUH-kzj-HuZkrNGK8S0eRPYpo9MHg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoteaq29HDRFjGsp8CcDt-trziSRNjeEEWA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yseOK7ba0N6U8Uo3iQKt1MpFFWlUGHct5A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVRSQ6epxUu5k5ZAE7fumunyEcREKrMC_Eg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEzdDOw1roEhatv6rVGUhKCi75Qfo4fSHfA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEMdctSMdh8APuHNAm2-W0uTTh2VsES-YxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3xA2OeIRsckOlvxOibrxmfnrSXer0KQcA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsw3Az8Tx5UWAkSfcBNgrbcp5iT6fWAVLKw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Xuzu4-Ji2uU1nJcvo4NFz1mZUVk5-LADg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xwDvuuUH-kzj-HuZkrNGK8S0eRPYpo9MHg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoteaq29HDRFjGsp8CcDt-trziSRNjeEEWA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yseOK7ba0N6U8Uo3iQKt1MpFFWlUGHct5A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVRSQ6epxUu5k5ZAE7fumunyEcREKrMC_Eg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEzdDOw1roEhatv6rVGUhKCi75Qfo4fSHfA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEMdctSMdh8APuHNAm2-W0uTTh2VsES-YxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3xA2OeIRsckOlvxOibrxmfnrSXer0KQcA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsw3Az8Tx5UWAkSfcBNgrbcp5iT6fWAVLKw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Xuzu4-Ji2uU1nJcvo4NFz1mZUVk5-LADg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xwDvuuUH-kzj-HuZkrNGK8S0eRPYpo9MHg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoteaq29HDRFjGsp8CcDt-trziSRNjeEEWA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yseOK7ba0N6U8Uo3iQKt1MpFFWlUGHct5A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVRSQ6epxUu5k5ZAE7fumunyEcREKrMC_Eg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEzdDOw1roEhatv6rVGUhKCi75Qfo4fSHfA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEMdctSMdh8APuHNAm2-W0uTTh2VsES-YxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3xA2OeIRsckOlvxOibrxmfnrSXer0KQcA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsw3Az8Tx5UWAkSfcBNgrbcp5iT6fWAVLKw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Xuzu4-Ji2uU1nJcvo4NFz1mZUVk5-LADg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xwDvuuUH-kzj-HuZkrNGK8S0eRPYpo9MHg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoteaq29HDRFjGsp8CcDt-trziSRNjeEEWA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yseOK7ba0N6U8Uo3iQKt1MpFFWlUGHct5A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVRSQ6epxUu5k5ZAE7fumunyEcREKrMC_Eg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEzdDOw1roEhatv6rVGUhKCi75Qfo4fSHfA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEMdctSMdh8APuHNAm2-W0uTTh2VsES-YxA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTER3xA2OeIRsckOlvxOibrxmfnrSXer0KQcA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsw3Az8Tx5UWAkSfcBNgrbcp5iT6fWAVLKw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Xuzu4-Ji2uU1nJcvo4NFz1mZUVk5-LADg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xwDvuuUH-kzj-HuZkrNGK8S0eRPYpo9MHg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoteaq29HDRFjGsp8CcDt-trziSRNjeEEWA&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yseOK7ba0N6U8Uo3iQKt1MpFFWlUGHct5A&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVRSQ6epxUu5k5ZAE7fumunyEcREKrMC_Eg&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEzdDOw1roEhatv6rVGUhKCi75Qfo4fSHfA&usqp=CAU"
]





