document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#board-list li').forEach(item => {
        item.addEventListener('click', () => {
            const grade = item.textContent.trim();  // 从 li 元素中提取板材等级

            let content = '';

            if (grade === 'A') {
                content = `
                    <div class="product-title">
                        <h2>A級板材</h2>
                    </div>
                    <div class="product-grid">
                        <a href="product-detail.html?name=A-224%20七星灰礦岩&image=A-224" class="product-link">
                            <div class="product">
                                <img src="images/A-224.jpg" alt="A-224 七星灰礦岩">
                                <div class="product-details">
                                    <h3>A-224 七星灰礦岩</h3>
                                <div class="size-quantity">
                                    <p>8mm  總數量: <span>0</span></p>
                                    <p>18mm 總數量: <span>0</span></p>
                                    <p>25mm 總數量: <span>0</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="product-detail.html?name=A-226%20雲輝白榴玄武岩&image=A-226&sizes=8mm,18mm,25mm" class="product-link">
                        <div class="product">
                            <img src="images/A-226.jpg" alt="A-226 雲輝白榴玄武岩">
                            <div class="product-details">
                                <h3>A-226 雲輝白榴玄武岩</h3>
                                <div class="size-quantity">
                                    <p>8mm  總數量: <span>0</span></p>
                                    <p>18mm 總數量: <span>0</span></p>
                                    <p>25mm 總數量: <span>0</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="product-detail.html?name=A-7223%20時尚荷黑&image=A-7223&sizes=8mm,18mm,25mm" class="product-link">
                        <div class="product">
                            <img src="images/A-7223.jpg" alt="A-7223 時尚荷黑">
                            <div class="product-details">
                                <h3>A-7223 時尚荷黑</h3>
                                <div class="size-quantity">
                                    <p>8mm  總數量: <span>0</span></p>
                                    <p>18mm 總數量: <span>0</span></p>
                                    <p>25mm 總數量: <span>0</span></p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="product-detail.html?name=A-8810%20橘&image=A-8810&sizes=8mm,18mm,25mm" class="product-link">
                        <div class="product">
                            <img src="images/A-8810.jpg" alt="A-8810 橘">
                            <div class="product-details">
                                <h3>A-8810 橘</h3>
                                <div class="size-quantity">
                                    <p>8mm  總數量: <span>0</span></p>
                                    <p>18mm 總數量: <span>0</span></p>
                                    <p>25mm 總數量: <span>0</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
            } else if (grade === 'B') {
                content = `
                    <div class="product-title">
                        <h2>B級板材</h2>
                    </div>
                    <div class="product-grid">
                        <a href="product-detail.html?name=B-662%20泥煤灰&image=B-662&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/B-662.jpg" alt="B-662 泥煤灰">
                                <div class="product-details">
                                    <h3>B-662 泥煤灰</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-661%20蒙布朗棕&image=B-661&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/B-661.jpg" alt="B-661 蒙布朗棕">
                                <div class="product-details">
                                    <h3>B-661 蒙布朗棕</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-660%20燕麥奶&image=B-661" class="product-link">
                            <div class="product">
                                <img src="images/B-660.jpg" alt="B-660 燕麥奶">
                                <div class="product-details">
                                    <h3>B-660 燕麥奶茶</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-010%20米黃織布&image=B-010" class="product-link">
                            <div class="product">
                                <img src="images/B-010.jpg" alt="B-010 米黃織布">
                                <div class="product-details">
                                    <h3>B-010 米黃織布</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-559%20愛麗絲&image=B-559" class="product-link">
                            <div class="product">
                                <img src="images/B-559.jpg" alt="B-559 愛麗絲">
                                <div class="product-details">
                                    <h3>B-559 愛麗絲</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-011%20墨黑織布&image=B-011" class="product-link">
                            <div class="product">
                                <img src="images/B-011.jpg" alt="B-011 墨黑織布">
                                <div class="product-details">
                                    <h3>B-011 墨黑織布</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-557%20夏綠蒂&image=B-011" class="product-link">
                            <div class="product">
                                <img src="images/B-557.jpg" alt="B-557 夏綠蒂">
                                <div class="product-details">
                                    <h3>B-557 夏綠蒂</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-600%20墨黑&image=B-600" class="product-link">
                            <div class="product">
                                <img src="images/B-600.jpg" alt="B-600 墨黑">
                                <div class="product-details">
                                    <h3>B-600 墨黑</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-394%20木紋灰&image=B-011" class="product-link">
                            <div class="product">
                                <img src="images/B-394.jpg" alt="B-394 木紋灰">
                                <div class="product-details">
                                    <h3>B-394 木紋灰</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                         <a href="product-detail.html?name=B-1336%20古典灰橡木&image=B-1336" class="product-link">
                            <div class="product">
                                <img src="images/B-1336.jpg" alt="B-1336 古典灰橡木">
                                <div class="product-details">
                                    <h3>B-1336 古典灰橡木</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-228%20彩雲石&image=B-228" class="product-link">
                            <div class="product">
                                <img src="images/B-228.jpg" alt="B-228 彩雲石">
                                <div class="product-details">
                                    <h3>B-228 彩雲石</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-556%20格陵蘭櫚木&image=B-556" class="product-link">
                            <div class="product">
                                <img src="images/B-556.jpg" alt="B-556 格陵蘭櫚木">
                                <div class="product-details">
                                    <h3>B-556 格陵蘭櫚木</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-552%20艾夏櫚木&image=B-556" class="product-link">
                            <div class="product">
                                <img src="images/B-552.jpg" alt="B-552 艾夏櫚木">
                                <div class="product-details">
                                <h3>B-552 艾夏櫚木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>    
                                </div>
                            </div>
                        </a>
                         <a href="product-detail.html?name=B-013%20阿帕卡灰&image=B-013" class="product-link">
                            <div class="product">
                                <img src="images/B-013.jpg" alt="B-013 阿帕卡灰">
                                <div class="product-details">
                                <h3>B-013 阿帕卡灰</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                         <a href="product-detail.html?name=B-331%20內布拉斯橡木&image=B-331" class="product-link">
                            <div class="product">
                                <img src="images/B-331.jpg" alt="B-331 內布拉斯橡木">
                                <div class="product-details">
                                <h3>B-331 內布拉斯橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-3357%20布隆橡木洗白&image=B-3357" class="product-link">
                            <div class="product">
                                <img src="images/B-3357.jpg" alt="B-331 布隆橡木洗白">
                                <div class="product-details">
                                <h3>B-3357 布隆橡木洗白</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-6958%20白蠟木&image=B-6958" class="product-link">
                            <div class="product">
                                <img src="images/B-6958.jpg" alt="B-6958 白蠟木">
                                <div class="product-details">
                                <h3>B-6958 白蠟木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-551%20康臥爾橡木&image=B-551" class="product-link">
                            <div class="product">
                                <img src="images/B-551.jpg" alt="B-551 康臥爾橡木">
                                <div class="product-details">
                                 <h3>B-551 康臥爾橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-3378%20杏花紅&image=B-3378" class="product-link">
                            <div class="product">
                                <img src="images/B-3378.jpg" alt="B-3378 杏花紅">
                                <div class="product-details">
                                <h3>B-3378 杏花紅</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-548%20深棕堡壘橡木&image=B-548" class="product-link">
                            <div class="product">
                                <img src="images/B-548.jpg" alt="B-548 深棕堡壘橡木">
                                <div class="product-details">
                                <h3>B-548 深棕堡壘橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-548%20淺棕堡壘橡木&image=B-547" class="product-link">
                            <div class="product">
                                <img src="images/B-547.jpg" alt="B-547 淺棕堡壘橡木">
                                <div class="product-details">
                                <h3>B-547 淺棕堡壘橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-530%20里斯本橡木&image=B-530" class="product-link">
                            <div class="product">
                                <img src="images/B-530.jpg" alt="B-530 里斯本橡木">
                                <div class="product-details">
                                <h3>B-530 里斯本橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-5007%20摩卡柚木&image=B-5007" class="product-link">
                            <div class="product">
                                <img src="images/B-5007.jpg" alt="B-5007 摩卡柚木">
                                <div class="product-details">
                                <h3>B-5007 摩卡柚木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-474%20晶鑽松木&image=B-474" class="product-link">
                            <div class="product">
                                <img src="images/B-331.jpg" alt="B-474 晶鑽松木">
                                <div class="product-details">
                                <h3>B-474 晶鑽松木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-433%20克拉洛胡桃木&image=B-433" class="product-link">
                            <div class="product">
                                <img src="images/B-433.jpg" alt="B-433 克拉洛胡桃木">
                                <div class="product-details">
                                <h3>B-433 克拉洛胡桃木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-3203%20灰防蟑板&image=B-3203" class="product-link">
                            <div class="product">
                                <img src="images/B-3203.jpg" alt="B-3203 灰防蟑板">
                                <div class="product-details">
                                <h3>B-3203 灰防蟑板</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-3091%20瑪格麗特&image=B-3091" class="product-link">
                            <div class="product">
                                <img src="images/B-3091.jpg" alt="B-3091 瑪格麗特">
                                <div class="product-details">
                                <h3>B-3091 瑪格麗特</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-220%20摩登清水模&image=B-220" class="product-link">
                            <div class="product">
                                <img src="images/B-220.jpg" alt="B-220 摩登清水模">
                                <div class="product-details">
                                <h3>B-220 摩登清水模</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-1347%20巴洛克拼木&image=B-1347" class="product-link">
                            <div class="product">
                                <img src="images/B-1347.jpg" alt="B-1347 巴洛克拼木">
                                <div class="product-details">
                                <h3>B-1347 巴洛克拼木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-1332%20古典橡木&image=B-1332" class="product-link">
                            <div class="product">
                                <img src="images/B-1332.jpg" alt="B-1332 古典橡木">
                                <div class="product-details">
                                <h3>B-1332 古典橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-1183%20北美原橡&image=B-1183" class="product-link">
                            <div class="product">
                                <img src="images/B-1183.jpg" alt="B-1183 北美原橡">
                                <div class="product-details">
                                <h3>B-1183 北美原橡</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-113%20挪威白橡木&image=B-113" class="product-link">
                            <div class="product">
                                <img src="images/B-113.jpg" alt="B-113 挪威白橡木">
                                <div class="product-details">
                                <h3>B-113 挪威白橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-043%20原切相思木&image=B-043" class="product-link">
                            <div class="product">
                                <img src="images/B-043.jpg" alt="B-043 原切相思木">
                                <div class="product-details">
                                <h3>B-043 原切相思木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-022%20淺灰路克&image=B-433" class="product-link">
                            <div class="product">
                                <img src="images/B-022.jpg" alt="B-022 淺灰路克">
                                <div class="product-details">
                                <h3>B-022 淺灰路克</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-362%20銀河星空橡木&image=B-362" class="product-link">
                            <div class="product">
                                <img src="images/B-362.jpg" alt="B-362 銀河星空橡木">
                                <div class="product-details">
                                <h3>B-362 銀河星空橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-060%20北歐木&image=B-433" class="product-link">
                            <div class="product">
                                <img src="images/B-060.jpg" alt="B-060 北歐木">
                                <div class="product-details">
                                <h3>B-060 北歐木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-3920%20慕尼黑雲石&image=B-3920" class="product-link">
                            <div class="product">
                                <img src="images/B-3920.jpg" alt="B-3920 慕尼黑雲石">
                                <div class="product-details">
                                <h3>B-3920 慕尼黑雲石</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                         <a href="product-detail.html?name=B-3447%20鹿兒島胡桃木&image=B-3447" class="product-link">
                            <div class="product">
                                <img src="images/B-3447.jpg" alt="B-3447 鹿兒島胡桃木">
                                <div class="product-details">
                                <h3>B-3447 鹿兒島胡桃木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                         <a href="product-detail.html?name=B-1010%20懷古橡木&image=B-1010" class="product-link">
                            <div class="product">
                                <img src="images/B-1010.jpg" alt="B-1010 懷古橡木">
                                <div class="product-details">
                                <h3>B-1010 懷古橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                         <a href="product-detail.html?name=B-078%20白梣&image=B-078" class="product-link">
                            <div class="product">
                                <img src="images/B-078.jpg" alt="B-078 白梣">
                                <div class="product-details">
                                <h3>B-078 白梣</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-546%20淺灰煙燻橡木&image=B-546" class="product-link">
                            <div class="product">
                                <img src="images/B-546.jpg" alt="B-546 淺灰煙燻橡木">
                                <div class="product-details">
                                <h3>B-546 淺灰煙燻橡木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-1185%20冰島白橡&image=B-1185" class="product-link">
                            <div class="product">
                                <img src="images/B-1185.jpg" alt="B-1185 冰島白橡">
                                <div class="product-details">
                                <h3>B-1185 冰島白橡</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-223%20鵝黃&image=B-223" class="product-link">
                            <div class="product">
                                <img src="images/B-223.jpg" alt="B-223 鵝黃">
                                <div class="product-details">
                                <h3>B-223 鵝黃</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-235%20銀藍&image=B-235" class="product-link">
                            <div class="product">
                                <img src="images/B-235.jpg" alt="B-235 銀藍">
                                <div class="product-details">
                                <h3>B-235 銀藍</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-211%20卡布奇諾&image=B-546" class="product-link">
                            <div class="product">
                                <img src="images/B-211.jpg" alt="B-211 卡布奇諾">
                                <div class="product-details">
                                <h3>B-211 卡布奇諾</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=B-434%20黃金柚木&image=B-434" class="product-link">
                            <div class="product">
                                <img src="images/B-434.jpg" alt="B-434 黃金柚木">
                                <div class="product-details">
                                <h3>B-434 黃金柚木</h3>
                                <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <!-- 其他 B級板材商品 -->
                    </div>
                    `;

            } else if (grade === 'C') {
                content = `
                    <div class="product-title">
                        <h2>C級板材</h2>
                    </div>
                    <div class="product-grid">
                        <a href="product-detail.html?name=C-320%20白楓木&image=C-320&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/C-320.jpg" alt="C-320 白楓木">
                                <div class="product-details">
                                    <h3>C-320 白楓木</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=C-002%20牙白&image=C-002&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/C-002.jpg" alt="C-002 牙白">
                                <div class="product-details">
                                    <h3>C-002 牙白</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=C-437%20銀色瀑布&image=C-437&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/C-437.jpg" alt="C-437 銀色瀑布">
                                <div class="product-details">
                                    <h3>C-437 銀色瀑布</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=C-1348%20白橡木&image=C-1348&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/C-1348.jpg" alt="C-1348 白橡木">
                                <div class="product-details">
                                    <h3>C-1348 白橡木</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;
                // C級板材商品內容
            } else if (grade === 'D') {
                content = `
                    <div class="product-title">
                        <h2>D級板材</h2>
                    </div>
                    <div class="product-grid">
                        <a href="product-detail.html?name=D-001%20白&image=D-001&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/D-001.jpg" alt="D-001 白">
                                <div class="product-details">
                                    <h3>D-001 白</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;
                // D級板材商品內容
            } else if (grade === '發泡板') {
                content = `
                    <div class="product-title">
                        <h2>C級板材</h2>
                    </div>
                    <div class="product-grid">
                        <a href="product-detail.html?name=%20發泡板&image=發泡板&sizes=5mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/發泡板.jpg" alt="發泡板">
                                <div class="product-details">
                                    <h3>發泡板</h3>
                                    <div class="size-quantity">
                                        <p>5mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;
                // 發泡板級板材商品內容
            } else if (grade === '特殊板') {
                content = `
                    <div class="product-title">
                        <h2>B級板材</h2>
                    </div>
                    <div class="product-grid">
                        <a href="product-detail.html?name=K-7005L%20皮格紋-卡布其諾&image=K-7005L&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/K-7005L.jpg" alt="K-7005L 皮格紋-卡布其諾">
                                <div class="product-details">
                                    <h3>K-7005L 皮格紋-卡布其諾</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="product-detail.html?name=K-3089L%20皮格紋-曉灰&image=K-3089L&sizes=8mm,18mm,25mm" class="product-link">
                            <div class="product">
                                <img src="images/K-3089L.jpg" alt="K3-089L 皮格紋-曉灰">
                                <div class="product-details">
                                    <h3>K-3089L 皮格紋-曉灰</h3>
                                    <div class="size-quantity">
                                        <p>8mm  總數量: <span>0</span></p>
                                        <p>18mm 總數量: <span>0</span></p>
                                        <p>25mm 總數量: <span>0</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    `;    
            }

            document.getElementById('product-details').innerHTML = content;
        });
    });

    // 默认加载 A 级板材的内容
    const defaultGrade = 'A級板材';
    document.querySelector(`#board-list li:contains(${defaultGrade})`).click();
});
