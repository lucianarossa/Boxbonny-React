import "../styles/Carrousel.css"


export default function Carrousel() {

  return (

    <div className="slider">
      <input name="control" id="page1" type="radio" checked />
      <input name="control" id="page2" type="radio" checked />
      <input name="control" id="page3" type="radio" checked />
      <input name="control" id="page4" type="radio" checked />
      <input name="control" id="page5" type="radio" checked />
      <div className="slider--el slider--el-1 anim-4parts">
        <div className="slider--el-bg">
          <div className="part top left"></div>
          <div className="part top right"></div>
          <div className="part bot left"></div>
          <div className="part bot right"></div>
        </div>
        <div className="slider--el-content">
          <h2 className="slider--el-heading">Random</h2>
        </div>
      </div>
      <div className="slider--el slider--el-2 anim-9parts">
        <div className="slider--el-bg">
          <div className="part left-top"></div>
          <div className="part mid-top"></div>
          <div className="part right-top"></div>
          <div className="part left-mid"></div>
          <div className="part mid-mid"></div>
          <div className="part right-mid"></div>
          <div className="part left-bot"></div>
          <div className="part mid-bot"></div>
          <div className="part right-bot"></div>
        </div>
        <div className="slider--el-content">
          <h2 className="slider--el-heading">Friends & Play</h2>
        </div>
      </div>
      <div className="slider--el slider--el-3 anim-5parts">
        <div className="slider--el-bg">
          <div className="part part-1"></div>
          <div className="part part-2"></div>
          <div className="part part-3"></div>
          <div className="part part-4"></div>
          <div className="part part-5"></div>
        </div>
        <div className="slider--el-content">
          <h2 className="slider--el-heading">Adventure</h2>
        </div>
      </div>
      <div className="slider--el slider--el-4 anim-3parts">
        <div className="slider--el-bg">
          <div className="part left"></div>
          <div className="part mid"></div>
          <div className="part right"></div>
        </div>
        <div className="slider--el-content">
          <h2 className="slider--el-heading">Gourmet & Drinks</h2>
        </div>
      </div>
      <div className="slider--el slider--el-5 anim-6parts">
        <div className="slider--el-bg">
          <div className="part left"></div>
          <div className="part mid"></div>
          <div className="part right"></div>
        </div>
        <div className="slider--el-content">
          <h2 className="slider--el-heading">SPA & Relax</h2>
        </div>
      </div>

      <div className="slider--control left">
        <label className="page1-left" for="page1"></label>
        <label className="page2-left" for="page2"></label>
        <label className="page3-left" for="page3"></label>
        <label className="page4-left" for="page4"></label>
        <label className="page5-left" for="page5"></label>
      </div>
      <div className="slider--control right">
        <label className="page1-right" for="page1"> </label>
        <label className="page2-right" for="page2"> </label>
        <label className="page3-right" for="page3"> </label>
        <label className="page4-right" for="page4"> </label>
        <label className="page5-right" for="page5"> </label>
      </div>
    </div>



  )
}