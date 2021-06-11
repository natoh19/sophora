from app.models import db, Product


def seed_products():

    product1 = Product(
        name="Brilliant Eye Brightener",
        brand="Thrive",
        categoryId=1 ,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1622847299/sophoraSeeds/Brilliant_Eye_Brightener_Set_Muna_Mieko_emmzie.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1622847298/sophoraSeeds/BEB-Mieko_BA-10_pobeq6.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1622847297/sophoraSeeds/BEB_Muna_Claudine_BA_b48cf534-5431-4a2f-a422-92a8a164d5c7_vf7ozw.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1622847297/sophoraSeeds/BEB-Mieko_BA-13_1_ery6c3.jpg",
        summary="Best-selling eye brightener ",
        description="Complements every skin tone and highlights all of your best features" ,
        price=4000,
        quantity=13
    )

    db.session.add(product1)

    product2 = Product(
        name="Artist Face Color Mini",
        brand="Make Up Forever",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1622848247/35487521166_I000021190_ARTIST_FACE_COLOR_MINI-5G--106_Face_2_xx8ttd.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1622848247/35487521166_I000021190_ARTIST_FACE_COLOR_MINI-5G--106_Face_1_hsbnsd.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1622848247/35487521166_I000021190_ARTIST_FACE_COLOR_MINI-5G--106_Face_0_syfu8e.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1622848247/35487521166_I000021190_ARTIST_FACE_COLOR_MINI-5G--106_Face_1_hsbnsd.jpg",
        summary="Highlighter & Blush Duo",
        description="An all-in-one travel duo featuring Artist Face Color highlight and blush powder bestsellers.",
        price=1540,
        quantity=11
    )

    db.session.add(product2)


    product3 = Product(
        name="Unlocked",
        brand="Hourglass",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623033822/8D60B0B4-C372-4410-9973-AFD71DA49F70_550x690_mt0aqv.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623033822/8D60B0B4-C372-4410-9973-AFD71DA49F70_550x690_mt0aqv.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623033822/D558DB41-82E6-4408-950B-BCFB66785C06_550x690_swhvpi.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623033821/1E2F94B0-89C2-4BDA-8F4D-6097E408CD06_550x690_vwzsid.jpg",
        summary="Dramatic eyes for day and night",
        description="Create a dramatic sparkling eye with an exclusive set that features Caution Extreme Lash Mascara and Scattered Light Glitter",
        price=4900,
        quantity=11
    )

    db.session.add(product3)

    product4 = Product(
        name="Le Volume de Chanel Mascara",
        brand="Chanel",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034435/makeup5/makeup5/le-volume-de-chanel-mascara-10-noir-0-21oz--packshot-default-191210-8800873775134_r3c06x.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034434/makeup5/makeup5/le-volume-de-chanel-mascara-10-noir-0-21oz--application-visual-a-191210-8801778466846_rx87ph.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034436/makeup5/makeup5/le-volume-de-chanel-mascara-10-noir-0-21oz--application-visual-b-191210-8801778434078_akmykv.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034436/makeup5/makeup5/le-volume-de-chanel-mascara-10-noir-0-21oz--basic-texture-191210-8801073692702_jtpqcf.jpg",
        summary="For a full volume look",
        description="Exquisite and long lasting deep color for eyes",
        price=4200,
        quantity=11
    )
    db.session.add(product4)

    product5 = Product(
        name="Les Beiges Healthy Glow eyes",
        brand="Chanel",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034694/makeup6/makeup6/les-beiges-healthy-glow-natural-eyeshadow-palette-medium-0-16oz--packshot-default-184180-8818220531742_fqhgyc.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034695/makeup6/makeup6/les-beiges-healthy-glow-natural-eyeshadow-palette-medium-0-16oz--application-visual-c-184180-8801648279582_lrkrqz.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034696/makeup6/makeup6/les-beiges-healthy-glow-natural-eyeshadow-palette-medium-0-16oz--basic-texture-184180-8801068908574_cihoru.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034696/makeup6/makeup6/les-beiges-healthy-glow-natural-eyeshadow-palette-medium-0-16oz--basic-texture-184180-8801068908574_cihoru.jpg",
        summary="Neutral eye palette",
        description="Long lasting, neutral beige based color",
        price=5300,
        quantity=11
    )
    db.session.add(product5)

    product6 = Product(
        name="Boy de Chanel 3-in-1",
        brand="Chanel",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034886/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--packshot-default-195614-8835365077022_ia4e7t.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034887/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--basic-texture-195614-8824994562078_libved.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034886/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--application-visual-b-195614-8824041406494_sryqfn.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034885/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--application-visual-a-195614-8824041472030_m4yhzn.jpg",
        summary="For men, 3-in-1 eye pencil and brow pencil",
        description="Neutral brown shade for any skin tone",
        price=5000,
        quantity=11
    )
    db.session.add(product6)

    product7 = Product(
        name="Boy de Chanel 3-in-1",
        brand="Chanel",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034886/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--packshot-default-195614-8835365077022_ia4e7t.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034887/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--basic-texture-195614-8824994562078_libved.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034886/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--application-visual-b-195614-8824041406494_sryqfn.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623034885/makeup7/makeup7/boy-de-chanel-3-in-1-eye-pencil-614-brown-0-02oz--application-visual-a-195614-8824041472030_m4yhzn.jpg",
        summary="For men, 3-in-1 eye pencil and brow pencil",
        description="Neutral brown shade for any skin tone",
        price=5000,
        quantity=11
    )
    db.session.add(product7)

    product8 = Product(
        name="Essential Conealer and Highlighter",
        brand="Chanel",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035147/makeup7/makeup7/makeup8/makeup8/palette-essentielle-conceal-highlight-color-170-beige-intense-0-31oz--packshot-default-149170-8800837992478_f5fc3h.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035147/makeup7/makeup7/makeup8/makeup8/palette-essentielle-conceal-highlight-color-170-beige-intense-0-31oz--packshot-default-149170-8800837992478_f5fc3h.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035147/makeup7/makeup7/makeup8/makeup8/palette-essentielle-conceal-highlight-color-170-beige-intense-0-31oz--basic-texture-149170-8804327718942_zghc0x.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035147/makeup7/makeup7/makeup8/makeup8/palette-essentielle-conceal-highlight-color-170-beige-intense-0-31oz--basic-texture-149170-8804327718942_zghc0x.jpg",
        summary="Conceal, hightlight, color",
        description="The ultimate staple for creating a dewy, fresh-faced look, this versatile palette packs multiple uses and effects in a sleek, touch-up-friendly compact.",
        price=5500,
        quantity=11
    )
    db.session.add(product8)

    product9 = Product(
        name="Hot Lips Kit",
        brand="Charlotte Tilbury",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035481/makeup9/makeup9/HotLips2.0_PatsyRed_Model_xwtswo.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035147/makeup7/makeup7/makeup8/makeup8/palette-essentielle-conceal-highlight-color-170-beige-intense-0-31oz--packshot-default-149170-8800837992478_f5fc3h.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035480/makeup9/makeup9/HotLips2_Packaging-and-swatches-infinity-burst_ui6hn6.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035480/makeup9/makeup9/HotLips2_Packaging-and-swatches-leopard-modern-red_qhhrsr.jpg",
        summary="Lipstick is happiness in a tube!",
        description="Choose a shade and a refill from Charlotte’s Hot Lips 2 collection, inspired by 11 of the world’s most iconic women and men; rule breakers, record makers and history shakers!",
        price=3500,
        quantity=11
    )
    db.session.add(product9)

    # product10 = Product(
    #     name="Magic Foundation",
    #     brand="Charlotte Tilbury",
    #     categoryId = 1,
    #     image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035812/CHARLOTTE_TILBURY-MAGIC_FOUNDATION-MODEL-SHADE-0_fzroum.jpg",
    #     imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035811/CHARLOTTE_TILBURY-MAGIC_FOUNDATION-LID_OFF_0_occ2jy.jpg",
    #     imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035811/CHARLOTTE_TILBURY-MAGIC_FOUNDATION-LID_OFF_0_occ2jy.jpg",
    #     imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035812/MagicFoundation-Shade0-Before-_-After-PDP_jhjikr.jpg",
    #     summary="Fairest with pink undertones",
    #     description="Demi-matte, long-lasting, buildable coverage formula that creates a flawless, perfect-looking finish.",
    #     price=3900,
    #     quantity=11
    # )
    # db.session.add(product10)

    product11 = Product(
        name="Beautiful Skin",
        brand="Organics",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623429825/image3_qgwben.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623429824/image1_ragihu.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623429825/image2_tu7cs3.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623429825/image3_qgwben.jpg",
        summary="Fast absorbing, non greasy",
        description="Flawless complexion in a jar!",
        price=3200,
        quantity=11
    )
    db.session.add(product11)

    product12 = Product(
        name="Botanical",
        brand="Botanical Oils",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430078/image1_h9gscz.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430078/image1_h9gscz.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430078/image1_h9gscz.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430078/image1_h9gscz.jpg",
        summary="Moroccan Dry Oil",
        description="Luxury you can feel",
        price=3700,
        quantity=11
    )
    db.session.add(product12)



    product13 = Product(
        name="Glow and Get It",
        brand="Tulas",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430619/image2_hkm13u.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430619/image3_rdcgi1.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430619/image4_hfk7ou.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430619/image1_llgqw0.jpg",
        summary="Cooling & Brightening Eye Balm",
        description="Game-changing, hyaluronic acid eye balm",
        price=4500,
        quantity=11
    )
    db.session.add(product13)

    product14 = Product(
        name="Claydate",
        brand="Tulas",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430940/image1_xgnagb.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430940/image3_xx7bay.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430940/image2_krnkob.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623430941/image4_efwp28.jpg",
        summary="Detoxing & Toning Face Mask",
        description="Face mask stick that glies on smoothly with velvety soft Mediterranean clay",
        price=4900,
        quantity=11
    )
    db.session.add(product14)

    product15 = Product(
        name="Rose Glow & Get It",
        brand="Tulas",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431520/image1_b0a2st.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431520/image3_o4mtgo.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431521/image4_w291ha.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431521/image2_asbita.jpg",
        summary="Cooling & Brightening Eye Balm",
        description="Best-selling, hyaluronic acid eye balm, now with even more glow-enhancing",
        price=3000,
        quantity=11
    )
    db.session.add(product15)

    product16 = Product(
        name="Protect + Glow",
        brand="Tulas",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431767/default_regularsize_spf_600x_tti0vd.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431768/image2_lalcpk.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431768/image3_jmbzqg.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623431767/default_regularsize_spf_600x_tti0vd.jpg",
        summary="Daily Sunscreen Gel Broad Spectrum",
        description="Provides skin with daily SPF 30, as well as protection from the damaging effects of pollution",
        price=3600,
        quantity=11
    )
    db.session.add(product16)

    product17 = Product(
        name="Functional Fragrance",
        brand="Function",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432162/image1_rspduw.png",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432164/image2_fd0jo1.png",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432163/image3_mv9ux3.png",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432162/image1_rspduw.png",
        summary="Stress Reducing Fragrance",
        description="It aids sleep and reduces anxiety",
        price=3000,
        quantity=11
    )
    db.session.add(product17)

    product18 = Product(
        name="Ispahan",
        brand="Dior",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446607/image2_gqflkh.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446607/image3_mkdnmb.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446608/image1_qesdiq.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446607/image4_iexjp6.jpg",
        summary="A fragrance that arouses curiosity",
        description="Captivating fragrance that gives this olfactory evocation of the Orient",
        price=25000,
        quantity=11
    )
    db.session.add(product18)

    product19 = Product(
        name="Eden-Roc",
        brand="Dior",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432794/image2_sdfzoq.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432795/Y0996065_C099600578_E01_ZHC_prupy6.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432795/image3_w8dtqs.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623432794/image2_sdfzoq.jpg",
        summary="Irrefutably simple and natural",
        description="A vibrant ode to the most emblematic of luxury hotels along the French Riviera",
        price=25000,
        quantity=11
    )
    db.session.add(product19)


    product20 = Product(
        name="Miss Dior",
        brand="Dior",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433040/image2_iwignb.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433040/image3_jjahyk.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433041/iamge1_xwtc4y.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433040/image2_iwignb.jpg",
        summary="Discreet and elegant",
        description="A sparkling floral fragrance, a profusion of Grasse Roses",
        price=3900,
        quantity=11
    )
    db.session.add(product20)


    product21 = Product(
        name="Sol Cheirosa '62",
        brand="Sol Cheirosa",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433344/image2_tulgj0.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433345/image1_b4ennx.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433345/image4_qva2yt.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433345/image3_phnkft.jpg",
        summary="Scent of Summer",
        description="Inspired by the golden sun in Rio",
        price=7800,
        quantity=11
    )
    db.session.add(product21)


    product22 = Product(
        name="Cheirosa '40",
        brand="Sol Cheirosa",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433585/image1_b51t36.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433585/image2_wsj1vk.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433587/image3_tn0fre.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433587/image4_kn7ooq.jpg",
        summary="Black Amber Plum & Vanilla Woods",
        description="An inviting sensorial experience that brings together sensuous florals",
        price=1900,
        quantity=11
    )
    db.session.add(product22)


    product23 = Product(
        name="Brazilian Crush Cheirosa '39",
        brand="Sol Cheirosa",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433888/image1_mcxntc.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433889/image2_d3jisu.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433587/image3_tn0fre.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623433889/image3_bbvcdo.jpg",
        summary="Coconut Cream & Toasted Praline",
        description="Rich, warm vanilla and tropical orchid give the fragrance a sweet, clean mid-note",
        price=1900,
        quantity=11
    )
    db.session.add(product23)


    product24 = Product(
        name="Colorlast Shampoo",
        brand="Biolage",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434718/PPDHDC884486151513_1_swaipl.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434718/PPDHDC884486151513_2_akyhp4.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434718/HDC10141_2_gdeh0m.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434718/PPDHDC884486151513_1_swaipl.jpg",
        summary="Gentle Shampoo For Color Treated Hair",
        description="Enjoy the results of a hot new hair color for longer by stepping up your Hair Treatments routine",
        price=2000,
        quantity=11
    )
    db.session.add(product24)


    product25 = Product(
        name="Vibrancy Spray",
        brand="Matrix",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434993/PPDHDC884486399090_01_q0ajwn.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434993/PPDHDC884486399090_info_2_p6eige.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434993/HDC10093_1_dweh8v.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623434993/KeepMeVivid_BA_1_fwdksm.jpg",
        summary="Total Results Color Lamination",
        description="For extra help preventing your new hue from fading, use Matrix Total Results Keep Me Vivid Color",
        price=2500,
        quantity=11
    )
    db.session.add(product25)


    product26 = Product(
        name="Densifique",
        brand="Kerastase",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623439118/PPDHDC3474636909292_1_pgcvff.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623439118/PPDHDC3474636400188_2_joqy1o.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623439118/PPDHDC3474636403912_lifestyle_1_tmiuj1.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623439118/PPDHDC3474636909292_1_pgcvff.jpg",
        summary="A hair thickening and densifying shampoo",
        description="Restore the strength of your hair fiber with each wash",
        price=3500,
        quantity=11
    )
    db.session.add(product26)

    product27 = Product(
        name="Tecnlart Next Day",
        brand="L'Oreal",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623449411/PPDHDC884486218674_lifestyle_1_bykgc1.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623449411/PPDHDC884486218674_2_mk5u8t.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623449411/PPDHDC884486218674_1_e7rkwx.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623449411/PPDHDC884486218674_lifestyle_1_bykgc1.jpg",
        summary="A dry shampoo with light hold",
        description="Contains starch to weightlessly absorb excess oil on the scalp, and mineral salt to give hair sexy volume and hold.",
        price=2800,
        quantity=11
    )
    db.session.add(product27)

    product28 = Product(
        name="Elixir Ultime",
        brand="Kerastase",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623440361/PPDHDC3474636613908_1_ofnolt.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623440361/PPDHDC3474636613908_2_pxmfpx.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623440361/PPDHDC3474636613847_lifestyle_1_alrkk9.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623440361/PPDHDC3474636613908_1_ofnolt.jpg",
        summary="A magic potion for beautiful hair",
        description="A blend of five precious hair oils that will add shine, deeply nourish, and help to prevent breakage.",
        price=5100,
        quantity=11
    )
    db.session.add(product28)


    product29 = Product(
        name="Hair Touch Up",
        brand="L'Oreal",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445119/PPDHDC3474636382835_2_czlosx.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445119/PPDHDC3474636382835_3_d6wptm.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445119/PPDHDC3474636382835_2_czlosx.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445119/PPDHDC3474636382835_2_czlosx.jpg",
        summary="A root concealing spray to cover grays",
        description="Touch Up Professional Root Concealer in Light Brown, one of 7 available shades, is the quick, easy and natural-looking solution to covering up gray hairs",
        price=2500,
        quantity=11
    )
    db.session.add(product29)


    product29 = Product(
        name="Essentials",
        brand="Cold Pressed",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623444726/0005_ESSENTIALS1_750x_zei3kf.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623444737/Essentials_9429945d-f5b2-474f-9498-c74964dfe974_750x_dzt2g7.png",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623444738/Essentials_2_9564b72f-eb8b-4640-be0a-dbbbe1296320_750x_dibn37.png",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623444726/0005_ESSENTIALS1_750x_zei3kf.jpg",
        summary="Our best-selling Essentials system",
        description="Featuring nourishing products that detoxify buildup on the scalp and deliver intense hydration",
        price=8500,
        quantity=11
    )
    db.session.add(product29)


    product30 = Product(
        name="Color Safe",
        brand="Madison Reed",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445396/pdp-shampoo-conditioner-full-size-2000x2000_vlcoug.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445396/carousel-hair-shot-3-4x_m13wq4.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445395/carousel-hair-shot-2-4x_trpwkn.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623445395/carousel-hair-shot-1-4x_hrdfzr.jpg",
        summary="Nourishing, Color Protecting Shampoo & Conditioner",
        description="Creates long-lasting shine, softens and strengthens hair",
        price=3700,
        quantity=11
    )
    db.session.add(product30)

    product31 = Product(
        name="Cold Pressed",
        brand="Art + Acre",
        categoryId = 4,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446130/RestoreCollectionFront_750x_kzdzka.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446139/image4_cf52fe.png",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446147/image2_y1gxwh.png",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446145/image3_jtaatd.png",
        summary="The Restore Collection is the newest build on our all-time favorite Essentials",
        description="Focused on renewing vitality and healing damaged hair, this collection is formulated with pure, carefully-curated ingredients",
        price=9600,
        quantity=11
    )
    db.session.add(product31)

    product32 = Product(
        name="Brazilian Crush Cheirosa '71",
        brand="Sol Cheirosa",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446999/Cheirosa_71_Body_Fragrance_Mist_Sol_de_Janeiro_0_6ef21f5e-4baf-43a2-ae11-32171a2113f5_800x_qioc7y.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623446999/Cheirosa_71_Body_Fragrance_Mist_Sol_de_Janeiro_1_800x_qosrjg.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447001/Cheirosa_71_Body_Fragrance_Mist_Sol_de_Janeiro_5_800x_s3mony.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447005/Cheirosa_71_Body_Fragrance_Mist_Sol_de_Janeiro_4_800x_wxvsqg.jpg",
        summary="Caramelized Vanilla & Toasted Macadamia Perfum",
        description="This voluptuous fragrance serves up an irresistible gourmand experience that tempts in a whole new way.",
        price=1900,
        quantity=11
    )
    db.session.add(product32)


    product33 = Product(
        name="Cheirosa '62 Candle",
        brand="Sol Cheirosa",
        categoryId = 3,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447389/Limited_Edition_Cheirosa_62_Candle_Sol_de_Janeiro_0_800x_nvn17m.png",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447389/Limited_Edition_Cheirosa_62_Candle_Sol_de_Janeiro_3_800x_fb4bbp.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447389/Limited_Edition_Cheirosa_62_Candle_Sol_de_Janeiro_2_800x_jnpv8p.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447388/Limited_Edition_Cheirosa_62_Candle_Sol_de_Janeiro_4_800x_q56o40.jpg",
        summary="In the Iconic Scent of Brazilian Bum Bum Cream",
        description="Bask in the warmth of Brazil with our bright, beautiful and most eagerly anticipated soy-based candle.",
        price=3300,
        quantity=11
    )
    db.session.add(product33)

    product34 = Product(
        name="Brazilian Bum Bum Cream",
        brand="Sol Cheirosa",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447780/Brazilian_Bum_Bum_Cream_Sol_de_Janeiro_0_800x_odiphg.png",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447779/Brazilian_Bum_Bum_Cream_Sol_de_Janeiro_1_800x_ouk2vp.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447779/Brazilian_Bum_Bum_Cream_Sol_de_Janeiro_3_800x_mhdvxg.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623447779/Brazilian_Bum_Bum_Cream_Sol_de_Janeiro_5_800x_eg0jh3.jpg",
        summary="Helps Smooth and Visibly Tighten the Appearance of Skin",
        description="Our award-winning, deliciously-scented body cream is the ultimate Brazilian Beauty Secret.",
        price=4500,
        quantity=11
    )
    db.session.add(product34)

    product35 = Product(
        name="4 Play Moisturizing Shower Cream",
        brand="Sol Cheirosa",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448022/Brazilian_4_Play_Moisturizing_Shower_Cream-Gel_1_liter_Sol_de_Janeiro_0_800x_jq6w8s.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448022/Brazilian_4_Play_Moisturizing_Shower_Cream-Gel_1_liter_Sol_de_Janeiro_2_800x_e1x3eg.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448022/Brazilian_4_Play_Moisturizing_Shower_Cream-Gel_1_liter_Sol_de_Janeiro_2_800x_e1x3eg.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448021/Brazilian_4_Play_Moisturizing_Shower_Cream-Gel_Sol_de_Janeiro_2_34fd4a74-25e1-4b20-b57a-5440159f951d_800x_myawom.jpg",
        summary="Deliciously Scented Sulfate-Free Jumbo Size Body Wash",
        description="This generous 1 liter size of our Brazilian 4 Play Moisturizing Shower Cream-Gel gives you more of what you love—irresistibly soft, clean skin that’s so cheirosa",
        price=4900,
        quantity=11
    )
    db.session.add(product35)

    product36 = Product(
        name="Bom Dia Bright Body Cream",
        brand="Sol Cheirosa",
        categoryId = 2,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448495/Bom_Dia_Bright_Body_Cream_Sol_de_Janeiro_0_800x_pjwncm.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448495/Bom_Dia_Bright_Body_Cream_Sol_de_Janeiro_1_800x_noi6ba.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448495/Bom_Dia_Bright_Body_Cream_Sol_de_Janeiro_3_800x_rghrzk.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623448495/Bom_Dia_Bright_Body_Cream_Sol_de_Janeiro_4_800x_tesdbi.jpg",
        summary="It's a bom dia (good day) for gorgeous skin—yours!",
        description="Retexturizes and gives skin a brightening boost with exfoliating Fruit AHAs and Vitamin C",
        price=4500,
        quantity=11
    )
    db.session.add(product36)




    db.session.commit()

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
