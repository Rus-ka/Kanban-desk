import React, { useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
//import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import {View, Panel, Button, Group, CellButton, Root, PanelHeader} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
//import { Button } from '@vkontakte/vkui';
import Desks from './Desks';

const panel = {
	desks: 'desks',
	columns: 'columns',
	finish: 'finish',
};

const App = () => {
	//const [activeView, setActiveView] = useState("view1");
	//const [activeView, setActiveView] = useState("greetings");

	const [activeView, setActiveView] = useState("view1");
	
	return (

				
			<Root activeView={activeView}>
			<View activePanel="panel1.1" id="view1">
				<Panel id="panel1.1">
				<PanelHeader>View 1</PanelHeader>
				<Group>
					<div style={{ height: 200 }} />
					<CellButton onClick={() => setActiveView("view2")}>
				AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
					</CellButton>
					<div style={{ height: 600 }} />
				</Group>
				</Panel>
			</View>
			<View activePanel="panel2.1" id="view2">
				<Panel id="panel2.1">
				<PanelHeader>View 2</PanelHeader>
				<Group>
					<div style={{ height: 200 }} />
					<CellButton onClick={() => setActiveView("view1")}>
					Back to View 1
					Back to View 1
					Back to View 1
					Back to View 1
					Back to View 1
					Back to View 1
					
					</CellButton>
					<div style={{ height: 600 }} />
				</Group>
				</Panel>
			</View>
			</Root>
		// <View activePanel={activePanel}>
		// 	<Panel id="desks">
		// 	<Desks onChangePanel = {() => setActivePanel(panel.columns)}/>
		// 	<div>Привет, я панель с досками</div>
		// 	</Panel>
		// 	<Panel id="columns">
			
		// 	<Desks onChangePanel = {() => setActivePanel(panel.finish)}/>
		// 	<div>Привет, я панель с колонками</div>
		// 	</Panel>
		// 	<Panel id="finish">
			
		// 	<Desks onChangePanel = {() => setActivePanel(panel.desks)}/>
		// 	<div>Привет, я хз чё</div>

		// 	</Panel>
		// </View>
		// <Root activeView={activeView}>
		// <View activePanel="columns" id="view1">
		// 	<Panel id="columns">
		// 	<PanelHeader>View 1</PanelHeader>
		// 	<Group>
		// 		<div style={{ height: 200 }} />
		// 		{/* <CellButton onClick={() => setActiveView('view2')}> */}
		// 		<CellButton onClick={() => setTimeout(() => setActiveView('view2'), 1000)}>
		// 		Open View 2
		// 		</CellButton>
		// 		<div style={{ height: 600 }} />
		// 	</Group>
		// 	</Panel>
		// </View>
		// <View activePanel="desks" id="view2">
		// 	<Panel id="desks">
		// 	<PanelHeader>View 2</PanelHeader>
		// 	<Group>
		// 		<div style={{ height: 200 }} />
		// 		<CellButton onClick={() => setTimeout(() => setActiveView('view1'), 1000)}>
		// 		Back to View 1
		// 		</CellButton>
		// 		<div style={{ height: 600 }} />
		// 	</Group>
		// 	</Panel>
		// </View>
		// </Root>


// 	<View activePanel={activePanel}>
//   <Panel id="panel1">
//     <PanelHeader>Panel 1</PanelHeader>
//     <Group>
//       <div style={{ height: 200 }} />
//       <CellButton onClick={() => setActivePanel("panel2")}>
//         Go to panel 2
//       </CellButton>
//       <div style={{ height: 600 }} />
//     </Group>
//   </Panel>
//   <Panel id="panel2">
//     <PanelHeader>Panel 2</PanelHeader>
//     <Group>
//       <div style={{ height: 200 }} />
//       <CellButton onClick={() => setActivePanel("panel3")}>
//         Go to panel 3
//       </CellButton>
//       <div style={{ height: 600 }} />
//     </Group>
//   </Panel>
//   <Panel id="panel3">
//     <PanelHeader>Panel 3</PanelHeader>
//     <Group>
//       <div style={{ height: 200 }} />
//       <CellButton onClick={() => setActivePanel("panel1")}>
//         Back to panel 1
//       </CellButton>
//       <div style={{ height: 600 }} />
//     </Group>
//   </Panel>
// </View>

	// const [activePanel, setActivePanel] = useState(panel.desks);
	// return (
		
	// 	 <View activePanel={activePanel} header ='false'>
		
	// 		<Panel id = {panel.desks} separator = 'false'>
	// 			<Desks onChangePanel = {() => setActivePanel(panel.columns)}/>
	// 		</Panel>
	// 		<Panel id = {panel.columns}>
	// 			<div>Привет, я панель с колонками</div>
	// 			<Button onClick={() => setActivePanel(panel.desks)}>Перейти к доскам</Button>
	// 		</Panel> 
			
	// 	</View>
	);
  
};

export default App;
