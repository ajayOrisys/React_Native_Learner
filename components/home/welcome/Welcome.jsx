import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, images, SIZES } from "../../../constants";


const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

import styles from "./welcome.style";

const Welcome = () => {
	const router = useRouter();

	const [activeJobType, setActiveJobType] = useState("Full-Time");

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Adrian</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=""
						onChange={() => {}}
						placeholder="What are you looking for?"
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
					<Image
						source={icons.search}
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					scrollEnabled = {false}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
						>
							<Text>{item}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

export default Welcome;
