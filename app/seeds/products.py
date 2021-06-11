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

    product10 = Product(
        name="Magic Foundation",
        brand="Charlotte Tilbury",
        categoryId = 1,
        image_url_main="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035812/CHARLOTTE_TILBURY-MAGIC_FOUNDATION-MODEL-SHADE-0_fzroum.jpg",
        imageOne="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035811/CHARLOTTE_TILBURY-MAGIC_FOUNDATION-LID_OFF_0_occ2jy.jpg",
        imageTwo="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035811/CHARLOTTE_TILBURY-MAGIC_FOUNDATION-LID_OFF_0_occ2jy.jpg",
        imageThree="https://res.cloudinary.com/dse6ebwba/image/upload/v1623035812/MagicFoundation-Shade0-Before-_-After-PDP_jhjikr.jpg",
        summary="Fairest with pink undertones",
        description="Demi-matte, long-lasting, buildable coverage formula that creates a flawless, perfect-looking finish.",
        price=3900,
        quantity=11
    )
    db.session.add(product10)

#     product12 = Product(
#         sku='TDS1MCS',
#         name='Tye dye shirt',
#         category_id=1,
#         image_url='https://popsickvintage.com/wp-content/uploads/2019/12/hd-776-503x732.jpg',
#         description='Funky and hip tie dye shirt',
#         regular_price=35.00
#     )
#     db.session.add(product12)

#     product13 = Product(
#         sku='AWT1WS',
#         name='Aaliyah white tank',
#         category_id=1,
#         image_url='https://i.pinimg.com/originals/86/79/ac/8679ac737a499982938fbcd3a5b1a5c5.jpg',
#         description='Iconic Aaliyah tank top ',
#         regular_price=40.00
#     )
#     db.session.add(product13)

#     product51 = Product(
#         sku='NC2B32',
#         name='Navy Chinos',
#         category_id=2,
#         image_url='https://i.pinimg.com/originals/d7/78/3c/d7783cd18d05ec9aff5649b2f960024c.jpg',
#         description='Clean and sleek navy chinos',
#         regular_price=40.00
#     )
#     db.session.add(product51)

#     product52 = Product(
#         sku='RDJ2B30',
#         name='Raw denim jeans',
#         category_id=2,
#         image_url='https://i.pinimg.com/originals/cd/06/00/cd0600470c153e36ef37680a63a846a2.jpg',
#         description='Raw dark denim jeans for that classic raw denim look',
#         regular_price=50.00
#     )
#     db.session.add(product52)

#     product53 = Product(
#         sku='CP2GRM',
#         name='Cargo pants',
#         category_id=2,
#         image_url='https://ae01.alicdn.com/kf/HTB1iXc9X.vrK1RjSspcq6zzSXXaM/2019-Fashion-New-Men-s-Cargo-Pants-Cotton-Mens-Joggers-Hip-hop-Streetwear-Trousers-Army-Black.jpg',
#         description='Green hip and stylish cargo pants',
#         regular_price=30.00
#     )
#     db.session.add(product53)

#     product54 = Product(
#         sku='LWSJ2B34',
#         name='Light washed skinny jeans',
#         category_id=2,
#         image_url='https://i.pinimg.com/originals/23/fc/68/23fc689539a450621c20ac03d1301a4e.jpg',
#         description='Light wash skinny jeans for every day needs',
#         regular_price=35.00
#     )
#     db.session.add(product54)

# # ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#     product81 = Product(
#         sku='WS3B7',
#         name='Slides',
#         category_id=3,
#         image_url='https://thefashiontag.com/wp-content/uploads/2015/05/slide-sandals-outfits-11.jpg',
#         description='Women slides for all day comfort',
#         regular_price=15.00
#     )
#     db.session.add(product81)

#     product82 = Product(
#         sku='RB3BK6',
#         name='Rainboots',
#         category_id=3,
#         image_url='https://fasbest.com/wp-content/uploads/2017/04/Rain-Boots-Fashions-Style-26.jpg',
#         description='Classy and sturdy rainboots for those wet days out',
#         regular_price=75.00
#     )
#     db.session.add(product82)

#     product83 = Product(
#         sku='BF3BK4',
#         name='Ballet flats',
#         category_id=3,
#         image_url='https://www.outfittrends.com/wp-content/uploads/2016/05/baleet-lace-up-17.jpg',
#         description='Classic and stylish ballet flats',
#         regular_price=25.00
#     )
#     db.session.add(product83)

#     product84 = Product(
#         sku='PH3PK6',
#         name='Platform heels',
#         category_id=3,
#         image_url='http://ferbena.com/wp-content/uploads/2014/02/coral-velvet-platform-heels.jpg',
#         description='Beautiful platform heels to show your style and height',
#         regular_price=60.00
#     )
#     db.session.add(product84)

#     product85 = Product(
#         sku='WWS3BK6',
#         name='Wedge sneakers',
#         category_id=3,
#         image_url='https://data.whicdn.com/images/71694355/original.jpg',
#         description='Comfort of a sneaker with the wedge look',
#         regular_price=50.00
#     )
#     db.session.add(product85)

#     product86 = Product(
#         sku='WB3B5',
#         name='Booties',
#         category_id=3,
#         image_url='https://www.outfittrends.com/wp-content/uploads/2015/03/c01c9cf18936713dc904312a2b2e7630.jpg',
#         description='The everyday booties for a walk around town',
#         regular_price=45.00
#     )
#     db.session.add(product86)

#     product87 = Product(
#         name='White Socks',
#         category_id=4,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622398191/Screen_Shot_2021-05-20_at_5.03.46_PM_ro6ybs.png',
#         description="A pair of socks to wear",
#         regular_price=10.00
#     )
#     db.session.add(product87)

#     product88 = Product(
#         name='Motorcycle Sweatshirt',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622398566/Screen_Shot_2021-05-20_at_5.05.26_PM_hcfmwu.png',
#         description='Motorcycle Sweatshirt to ride in or wear on the track',
#         regular_price=200.00
#     )
#     db.session.add(product88)

#     product89 = Product(
#         name='Pirates Bomber',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622398701/Screen_Shot_2021-05-20_at_5.07.19_PM_dok0c6.png',
#         description='Pirates Bomber to wear on the go',
#         regular_price=200.00
#     )
#     db.session.add(product89)

#     product90 = Product(
#         name='A$AP Rocky Jean Jacket',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622499613/Screen_Shot_2021-05-31_at_5.19.53_PM_r1fs54.png',
#         description="A$AP Rocky's Jean Jacket",
#         regular_price=200.00
#     )
#     db.session.add(product90)

#     product91 = Product(
#         name='The Air Crew Tee',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622499614/Screen_Shot_2021-05-31_at_5.19.37_PM_kfmbjr.png',
#         description='Air crew tee to wear to the beach',
#         regular_price=25.00
#     )
#     db.session.add(product91)

#     product92 = Product(
#         name='Blue Translucent Top',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622499615/Screen_Shot_2021-05-31_at_5.19.09_PM_m2r2e1.png',
#         description='Blue top to wear up and trendy, or down and casual',
#         regular_price=130.00
#     )
#     db.session.add(product92)

#     product93 = Product(
#         name='I Feel Ghosts',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400316/Screen_Shot_2021-05-30_at_1.43.15_PM_mssrjm.png',
#         description='Kids see ghosts sometimes',
#         regular_price=240.00
#     )
#     db.session.add(product93)

#     product94 = Product(
#         name='James Dean Leather',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622499613/Screen_Shot_2021-05-31_at_5.19.26_PM_oxkynn.png',
#         description='James Dean classic leather',
#         regular_price=180.00
#     )
#     db.session.add(product94)

#     product95 = Product(
#         name='Ralph Lauren Polo',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400316/Screen_Shot_2021-05-30_at_1.43.58_PM_wkz4zo.png',
#         description='Blue ralph lauren polo',
#         regular_price=30.00
#     )
#     db.session.add(product95)

#     product96 = Product(
#         name='LA Tee',
#         category_id=1,
#         image_url='https://res.cloudinary.com/dn2tap8j5/image/upload/v1622400316/Screen_Shot_2021-05-30_at_1.44.11_PM_lxyyxa.png',
#         description="An la tee that's classic",
#         regular_price=25.00
#     )
#     db.session.add(product96)

#     product97 = Product(
#         name='High Waist Shorts',
#         category_id=2,
#         image_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lXaJB12R9s7eJY2O64VzZmRqu1eQP-oMrT9BOMVtalFBYo7vrzau163bR7-f4ihOjxHZTOERPw&usqp=CAc',
#         description='High waist shorts for the summer',
#         regular_price=50.00
#     )
#     db.session.add(product97)

#     product98 = Product(
#         name='Printed Leggings',
#         category_id=2,
#         image_url='https://smhttp-ssl-71464-tavinoir.nexcesscdn.net/pub/media/catalog/product/cache/9e832ad6fa4744e63c1db7c26c6fa775/a/p/apparel_high-waisted-tight_charcoal-palm_v1_5.jpg',
#         description='Jungle leggings for the summer',
#         regular_price=50.00
#     )
#     db.session.add(product98)

#     product99 = Product(
#         name='Flower Skirt',
#         category_id=2,
#         image_url='https://i1.adis.ws/i/boohooamplience/agg76943_white_xl_3?$product_image_main_mobile$&fmt=webp',
#         description='Flower skirt for warm weather and clean air',
#         regular_price=75.00
#     )
#     db.session.add(product99)

#     product100 = Product(
#         name='Faux Leather Leggings',
#         category_id=2,
#         image_url='https://n.nordstrommedia.com/id/sr3/4759f20b-80e1-41cb-9bbb-0dc4f31387e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
#         description='Leather Leggings for anytime, anywhere',
#         regular_price=75.00
#     )
#     db.session.add(product100)

#     product101 = Product(
#         name="Mom's Jeans",
#         category_id=2,
#         image_url='https://img.ltwebstatic.com/images3_pi/2020/11/02/1604310714632a63f439ace1263a6756967d8c1a92.webp',
#         description='Jeans you can wear, ripped',
#         regular_price=101.00
#     )
#     db.session.add(product101)

#     product102 = Product(
#         name="Jogger's Flat Front",
#         category_id=2,
#         image_url='https://vuori.imgix.net/s/files/1/0022/4008/6074/products/VW418TER_1_1890x.jpg?auto=compress,format&w=1230&v=1610748548',
#         description='Daily jogger for summer or cool weather',
#         regular_price=35.00
#     )
#     db.session.add(product102)

#     product103 = Product(
#         name='Performance Jogger',
#         category_id=2,
#         image_url='https://vuori.imgix.net/s/files/1/0022/4008/6074/products/VW303HTG_1_e050560d-f70e-4584-bc3f-83f111396fd3_1890x.jpg?auto=compress,format&w=1230&v=1611175536',
#         description='Knit joggers for the shore or city',
#         regular_price=25.00
#     )
#     db.session.add(product103)

#     product104 = Product(
#         name='Jeggings',
#         category_id=2,
#         image_url='https://athleta.gap.com/webcontent/0019/950/181/cn19950181.jpg',
#         description='Jeggings for the office',
#         regular_price=23.00
#     )
#     db.session.add(product104)

#     product105 = Product(
#         name='High Waist Shorts',
#         category_id=2,
#         image_url='https://s7d5.scene7.com/is/image/FreePeople/55752372_088_a/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720',
#         description='The way home shorts',
#         regular_price=30.00
#     )
#     db.session.add(product105)

#     product106 = Product(
#         name='Japanese Linen Pants',
#         category_id=2,
#         image_url='https://cdn.shopify.com/s/files/1/0480/9136/5539/products/LOOK16_050_1296x2048.jpg?v=1620917518',
#         description='Aya muse mika pants with leather tie',
#         regular_price=25.00
#     )
    # db.session.add(product106)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()
