Feature: 5242. Spin The Wheel

    Scenario Outline: Spin The Wheel
        # ================================================
        # HALAMAN TRADE PROGRAM
        Given I am on the Trade Program page
        When I click button 'Tambah'
        Then I input form and submit trade program

        # ================================================
        # HALAMAN SPIN THE WHEEL
        # TRADE PROGRAM TIDAK MENCUKUPI
        When I am on the Spin The Wheel page for edit trade program tidak mencukupi
        Then I click button 'Tambah' SPT
        Then I input form tab Spin The Wheel and submit
        Then List STW, search, click edit, and input form tab audience
        Then Click tab Pengaturan Mekanisme and input form
        Then Click tab Preview

        # ================================================
        # HALAMAN SPIN THE WHEEL
        # UBAH TRADE PROGRAM AGAR MENCUKUPI
        When Edit trade program tab spin the wheel
        Then Click tab Preview again

        # ================================================
        # HALAMAN SPIN THE WHEEL
        # EDIT PUBLISH DAN TRADE PROGRAM
        When System should be leading to Spin The Wheel Page

        # ================================================
        # HALAMAN SPIN THE WHEEL
        # EDIT UNPUBLISH DAN TRADE PROGRAM TIDAK CUKUP
        When I am on the Spin The Wheel page for edit and check trade program disable
        Then I edit trade program in tab Spin The Wheel
        Then Click tab Preview and save publish

        # ================================================
        # HALAMAN SPIN THE WHEEL
        # EDIT UNPUBLISH DAN TRADE PROGRAM CUKUP
        When I am on the Spin The Wheel page
        Then I input form tab Spin The Wheel and change trade program mencukupi
        Then Click tab Preview and save