import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, Icon, Thumbnail } from 'native-base';
import { STATUS_COLOR, COLORS, IMAGES } from '../../utils/constants';
import { checkKey, formatHours } from '../../utils/helpers';

const Timer = ({ iconName, time }) => {
  return (
    <View style={styles.timers}>
      <Icon
        type={'MaterialCommunityIcons'}
        name={iconName}
        style={{ fontSize: 17, marginRight: 2 }}
      />
      <Text style={{ fontSize: 14 }}>{time}</Text>
    </View>
  );
};

const showInfo = description => {
  Alert.alert('Task description', description, [{ text: 'OK' }], {
    cancelable: false
  });
};

const Task = props => {
  const {
    name,
    description,
    status,
    handleOptions,
    estimate,
    duration,
    timer_running,
    users,
    links
  } = props;

  const bgColor = STATUS_COLOR[status] || COLORS.PRIMARY;
  const labelColor = status === 'pending' ? '#000' : '#fff';
  const user = links.user.linkage
    ? checkKey(users, links.user.linkage.id)
    : null;
  const labelStyle = { color: labelColor, backgroundColor: bgColor };

  return (
    <View style={[styles.container, { borderColor: bgColor }]}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => showInfo(description)}>
        <Text>{name}</Text>
        <View style={styles.wrapImage}>
          <Thumbnail
            small
            style={styles.image}
            source={user ? { uri: user.image } : IMAGES.USER}
            resizeMode={'contain'}
          />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.wrapLabel}>
              <Text style={[styles.label, labelStyle]}>{status}</Text>
            </View>

            {timer_running && (
              <View style={styles.wrapLabel}>
                <Icon
                  type={'MaterialCommunityIcons'}
                  name={'run-fast'}
                  style={{ fontSize: 17 }}
                />
              </View>
            )}

            <Timer iconName={'timer'} time={formatHours(estimate)} />
            <Timer iconName={'timelapse'} time={formatHours(duration)} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsBtn} onPress={handleOptions}>
        <Icon
          name={'dots-vertical'}
          type={'MaterialCommunityIcons'}
          style={{ color: COLORS.SUCCESS, fontSize: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    borderLeftWidth: 5,
    borderRadius: 2,
    backgroundColor: '#fff',
    marginBottom: 5
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  optionsBtn: {
    width: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 30
  },
  wrapImage: {
    paddingTop: 4,
    flexDirection: 'row'
  },
  wrapLabel: {
    justifyContent: 'center',
    marginLeft: 7
  },
  timers: {
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 2,
    marginLeft: 5
  },
  label: {
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    fontSize: 14,
    textTransform: 'capitalize'
  }
});

export default Task;
