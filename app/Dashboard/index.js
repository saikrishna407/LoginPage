import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
class Dashboard extends Component {
    render() {

        return (
            <View style={styles.main}>
                <StatusBar
                    backgroundColor={'#336dcc'}
                    barStyle="light-content"
                />
                <View style={styles.HeaderStyle}>
                <Text style={styles.HeaderTextStyle}> Dashboard</Text>
            </View>
                <View>

                    <View >
                       
                        <ScrollView >
                            {this.props.user.map((v, k) => {
                                return (

                                    <View style={styles.card} key={k}>
                                        <View style={styles.colorSide}>
                                        </View>
                                        <View style={styles.sideView}>
                                            <Text style={styles.mainName}>{v.name}</Text>
                                            <View style={styles.rowView}>
                                                <Text style={styles.rowText}>{v.email}</Text>
                                                <Text style={styles.rowText}>{v.phoneNo}</Text>
                                            </View>
                                            <View style={styles.colorline}>
                                            </View>
                                            <Text style={styles.education}>Age:{v.age}</Text>
                                            <Text style={styles.education}>Gender:{v.gender}</Text>
                                        </View>
                                    </View>
                                )
                            })
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }

}
const mapStateToProps = (state) => ({
    user: state.userData
})
export default connect(mapStateToProps)(Dashboard)