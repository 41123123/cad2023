var tipuesearch = {"pages": [{'title': 'First', 'text': '\n', 'tags': '', 'url': 'First.html'}, {'title': 'Brython', 'text': '======= \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'About', 'text': '  \n https://41123123.github.io/cad2023 \n https://s1511.cycu.org/~w8/cad2023/ \n Brython \n >>>>>>> 1a558b5307b55ef420305f1007c43376a0641521 \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'homework', 'text': '檔案 \n', 'tags': '', 'url': 'homework.html'}, {'title': '專案一', 'text': '\n', 'tags': '', 'url': '專案一.html'}, {'title': '零件1', 'text': '\n', 'tags': '', 'url': '零件1.html'}, {'title': '零件2', 'text': '\n', 'tags': '', 'url': '零件2.html'}, {'title': '零件3', 'text': '\n', 'tags': '', 'url': '零件3.html'}, {'title': '零件4', 'text': '\n', 'tags': '', 'url': '零件4.html'}, {'title': '模擬影片', 'text': '未加入感測器 \n \n \n # 以下的 zmq 程式庫已經過修改, 可以在 IPv4 與 IPv6 環境下使用\n# 針對 CoppeliaSim 的 zmq 延伸程式, Python 需要安裝 cbor 與 pyzmq 等兩個模組\n# pip install cbor pyzmq\nfrom zmqRemoteApi_IPv6 import RemoteAPIClient\n# 由於在 zmq 程式執行時, 希望讓使用者可以透過鍵盤 (或其他電子電機訊號) 指令控制遠端的機電模擬場景\n# Python 程式環境還需要安裝 keyboard 模組, pip install keyboard\nimport keyboard\n\n# 利用以下程式碼連接 CoppeliaSim remote API server\n#第一個輸入變數若為 localhost 則只能控制與程式同在的場景\n# 但若第一輸入變數為可連外的 IPv4 或 IPv6 address, 則可用來控制遠端電腦上的模擬場景\n# 23000 為 CoppeliaSim 使用 ZMQ remote API 連線控制時內定的網路埠號\n# client 與 server 的防火牆或代理主機必須讓此埠號的封包 (socket) 通過\nclient = RemoteAPIClient(\'localhost\', 23000)\n\n# 利用 getObject 取得場景中的 "sim" 物件參考對應值\nsim = client.getObject(\'sim\')\n\n# 利用 sim 物件的 startSimulation() 方法啟動場景模擬\nsim.startSimulation()\n\n# 利用 getObject 取得 \'marble\' and \'sensor\'  物件的參考對應值\nmarble = sim.getObject(\'./marble\')\nsensor = sim.getObject(\'./sensor\')\n\n# 透過變數屬性設定方法將 marble 設為 non-static, 意即具有 dynamic 特性\nsim.setObjectInt32Param(marble, sim.shapeintparam_static, 0)\n\n# 主模擬程序\nwhile True:\n    if keyboard.is_pressed(\'q\'):\n        # 模擬執行期間, 將滑鼠停在場景, 鍵盤按下 q 可以終止模擬\n        break\n\n    r, dist, pt, obj, normal = sim.handleProximitySensor(sensor)\n    res, dist2, point, obj2, n = sim.readProximitySensor(sensor)\n    # Get the current position of the marble\n    current_position1 = sim.getObjectPosition(marble, -1)\n    current_position2 = sim.getObjectPosition(marble, -1)\n\n    # 當鋼球碰觸感測器時\n    if res > 0:\n        if current_position1[0] < current_position2[0]:\n            # 對鋼球質心施以一個向量力\n            sim.addForceAndTorque(marble, [340, 0, -85], [0, 0, 0])\n\n# Stop the simulationq\nsim.stopSimulation()\n \n \n 加入感測器後利用程式還是無法完成永動 \n \n \n \n \n', 'tags': '', 'url': '模擬影片.html'}, {'title': '專案一簡化', 'text': '', 'tags': '', 'url': '專案一簡化.html'}, {'title': '繪圖過程', 'text': '\n', 'tags': '', 'url': '繪圖過程.html'}, {'title': 'W15', 'text': '軌道的繪圖過程 \n \n \n', 'tags': '', 'url': 'W15.html'}, {'title': '網站', 'text': 'https://41123123.github.io/cad2023 \n', 'tags': '', 'url': '網站.html'}, {'title': '維護方法', 'text': '', 'tags': '', 'url': '維護方法.html'}, {'title': 's1511', 'text': '1.開啟ssh_cad學號.bat \n 2.輸入密碼(學校email) \n 3.輸入 cd cad2023 \n 4.輸入python3 server.py並 成功執行， \n 5.進入 https://s1511.cycu.org:8136 \n 6.登入進去並且進行更新 \n 7.更新完轉靜態(convert)，按下acp並且輸入備註 \n', 'tags': '', 'url': 's1511.html'}, {'title': 'Replit', 'text': '1.完成更新內容點擊save \n 2. convert轉成靜態網站 \n 3.到replit點擊Git \n 4.在update輸入框中輸入更新內容的名稱 \n 5.點擊stage&commit \n 6.點擊push \n', 'tags': '', 'url': 'Replit.html'}, {'title': '自我評分', 'text': '自評分數:60 \n A: 是否按照進度明確標示倉儲的改版歷程 \n 答:是 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n 答:是 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n 答:是(使用Replit、s1511.cycu.org 成功) \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n 答:是(使用SOLIDWORKS) \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n 答:是 \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n 答:是 \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n 答:否 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n 答:否 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n 答:(完成繪圖) \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n 答:還未 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n 答:還未 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n 答:還未 \n', 'tags': '', 'url': '自我評分.html'}, {'title': 'W7', 'text': '', 'tags': '', 'url': 'W7.html'}, {'title': 'SOILDWORK', 'text': '簡介: SolidWorks是一種三維電腦輔助設計（3D CAD）軟體，由美國公司Dassault Systèmes開發，S olidWorks主要用於機械設計、產品設計和工程設計。它提供了強大的建模工具，可以幫助工程師和設計師創建複雜的三維模型。 \n 下載 SolidWorks 2022 安裝檔案 \xa0 (檔案大小 16GB, for @nfu users only, 請先根據安裝序號與認證主機在校園網路中或透過 VPN (從 \xa0 ecare 登入 申請) 連網, 必須完整安裝結束後, 再進行 service pack 更新) \n 安裝 SoildWorks 2022 過程畫面 (因為必須在校園內或使用 VPN 認證才能完成安裝, 因此以下直接顯示出 Serial Number 與認證主機 IP 位址): \n 下載後解開壓縮檔案, 執行 Setup.exe 進行安裝 (以::2 主機的安裝為例): \n \n 輸入安裝序號, 以下只安裝基本模組, 並沒有勾選其餘套件: \n \n \n 在安裝過程必須先安裝與序號對應的版本內容後再進行更新, 因此以下使用內定的否, 表示先不下載更新檔案: \n \n 勾選接受 SolidWorks 條款後進行安裝: \n \n 點選馬上安裝後,\xa0 會跳出認證伺服器的視窗表單, 必須輸入正確的認證埠號與 IPv4 位址才可進行安裝, 截至 2023.04.07, 校內的 SolidWorks 認證主機僅支援 IPv4 網路協定認證, 若希望取得認證的電腦僅啟動 IPv6 網路協定, 將無法取得認證授權. \n \n 接著按下確定後, 就可以進行漫長且容量達 20 GB 的 SolidWorks 安裝: \n \n 安裝完成之前, 會跳出下列視窗, 可以選擇不參加客戶經驗改進計畫, 或許能讓操作過程更加順暢: \n \n 最後按下完成鍵就可以執行 SolidWorks 2022 了. \n 啟動時顯示共有 500 個用戶可以同時連線: \n \n 啟動時必須允許 SolidWorks 通過公用網路防火牆: \n \n 而且必須接受 SolidWorks 的使用授權: \n \n 然後還要進行各模組的資料更新, 以下選擇更新所有模組: \n \n 更新完成後, 在開始選單中執行 SOLIDWORKS 2022, 然後同意使用授權: \n \n 終於可以使用這個佔用 20GB 硬碟資料的 SolidWorks 了: \n \n \n 成功開啟SOLIDWORKS \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'SOILDWORK.html'}]};