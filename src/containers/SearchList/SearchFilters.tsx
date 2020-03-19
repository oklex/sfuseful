import React from "react";
import { allCategories, ICategories } from "../../models/services";

interface ISearchFiltersProps {
  update: (list: ICategories[]) => void;
}

interface ISearchFiltersState {
  filterList: ICategories[];
}

class SearchFilters extends React.Component<
  ISearchFiltersProps,
  ISearchFiltersState
> {
  state = {
    filterList: []
  };

  showInput = () => {
    return allCategories.map(category => {
      return (
        <div>
          <input
            type="radio"
            value={category}
            onChange={() => {
              this.handleChange(category);
            }}
          />
          {category}
        </div>
      );
    });
  };

  handleChange = (category: ICategories) => {
    console.log("updating filter list with ", category);
    var contains: boolean = false;
    var index: number = -1;
    this.state.filterList.forEach((c, key) => {
      if (c === category) {
        contains = true;
        index = key;
      }
    });
    if (contains) {
      // if in array, remove it= true
      console.log("contains - removing")
      this.setState({
        filterList: this.state.filterList.splice(index, 1)
      });
    } else if (this.state.filterList.length === 0) {
        console.log("empty list - added")
      this.setState({
        filterList: [category]
      });
    }else {
        console.log("replacing filter")
      this.setState({
        filterList: [category]
      });
    }
    // if not in array, add it
    this.props.update(this.state.filterList);
  };

  render() {
    return <div>{this.showInput()}</div>;
  }
}

export default SearchFilters;
