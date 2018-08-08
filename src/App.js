import React, { Component } from 'react';
import coverImg from './cover.jpg';
import cloud_solution from './cloud-solution.png'
import big_data from './big-data.png'
import remote from './remote.png'
import './App.css';
import NavBar from './NavBar'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />		       
        <Content />
        <Footer />       
      </div>       
    );
  }
}

class Content extends Component{
  render(){
    return(
      <div className="container container-fluid">
        <div className="Cover">
          <img src={coverImg} alt="" className="img-responsive"/>
        </div>
        <div className="content">
          <p>أنظمة غيمة (Cloud Systems): مؤسّسة سعوديّة تقدّم حلولاً سحابيّةً مستفيدةً من الحوسبة السحابيّة
             (Cloud Computing) والحوسبة دون خادم (Serverless Computing)، وتهتم بالبيانات الضخمة (Big Data)، وتشجّع ثقافة العمل عن بُعد
              (Remote)، وتقدّم تدريبًا صيفيًّا استثنائيًا في حقولٍ ذات علاقة.</p>
        </div>
        <Objective />
     </div>
    );
  }
}

class Objective extends Component{
  render(){
    return(
      <div className="row">
				<div className="col-md-4">
					<div className="thumbnail">
						<img src={cloud_solution} className="custom-picture"></img>
						<div className="caption text-center">
							<h3>حلول سحابيّة</h3>
							<p>نضعُ أفضل التقنيّات في السوق معًا حسب حاجة كلّ عميل، نوصِل أفضل الحلول بالاستفادة من السحابة العامّة (Public Colud)، والسحابة الخاصّة (Private Cloud)، والخوادم المخصّصة (Dedicated Servers) ومزيجٌ من المنصّات.</p>
						</div>					
          </div>
        </div>
        <div className="col-md-4">
					<div className="thumbnail">
						<img src={big_data} className="custom-picture"></img>
						<div className="caption text-center">
							<h3>بيانات ضخمة</h3>
							<p>حجم البيانات التي يتم تدوالها عالميًا ضخمٌ جدًا، و حتّى هذه اللحظة، لا يزال في ازدياد، حينما يتعلّق الأمر بعملك (Business)، فماذا تعني البيانات الضخمة؟ وكيف يُمكن الاستفادة منها بأقصى قدر، دعنا نعمل معًا للإجابة على هذا السؤال.</p>
						</div>					
          </div>
        </div>
        <div className="col-md-4">
					<div className="thumbnail">
						<img src={remote} className="custom-picture"></img>
						<div className="caption text-center">
							<h3>عن بُعد</h3>
							<p>نعمل كفريقٍ واحد من أماكن جغرافيّة متعدّدة، ونتواصل لإنجاز المهام ولتحقيق رؤية المؤسّسة من خلال الإنترنت، نسعى لكي تنتشر ثقافة ”العمل عن بُعد“ والتي لا تختلف في إنجاز المطلوب عن الطريقة التقليديّة والمُستخدمة في معظم جهات العمل.</p>
						</div>					
          </div>
        </div>
     </div>
    );
  }
}


export default App;
