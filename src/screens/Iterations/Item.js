import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon, Text, Thumbnail } from 'native-base';
import { COLORS, STATUS_COLOR, IMPORTANCE } from '../../utils/constants';
import { checkKey } from '../../utils/helpers';

const Item = ({ name, kind, status, importance, projects, links }) => {
  const bgColor = STATUS_COLOR[status] || COLORS.PRIMARY;
  const labelColor = status === 'pending' ? '#000' : '#fff';
  const project = checkKey(projects, links.project.linkage.id);

  return (
    <View style={[styles.container, { borderColor: bgColor }]}>
      <TouchableOpacity style={styles.content}>
        <View style={styles.wrapImage}>
          <Thumbnail
            small
            style={styles.image}
            source={{
              uri: `https://work.planbox.com/img/email/${kind}.png`
            }}
            resizeMode={'contain'}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text>{name}</Text>
          <View style={styles.wrapLabels}>
            <Text style={[styles.project, { textTransform: 'uppercase' }]}>
              {project}
            </Text>
            <Text
              style={[
                styles.project,
                { backgroundColor: bgColor, color: labelColor }
              ]}>
              {status}
            </Text>
            {importance > 0 && (
              <Text style={styles.project}>{IMPORTANCE[importance]}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsBtn}>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  wrapImage: {
    paddingHorizontal: 4
  },
  image: {
    width: 20
  },
  optionsBtn: {
    width: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapLabels: {
    flexDirection: 'row'
  },
  project: {
    backgroundColor: '#f2f2f2',
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    fontSize: 13,
    marginRight: 5,
    marginTop: 3,
    textTransform: 'capitalize'
  }
});

export default Item;
